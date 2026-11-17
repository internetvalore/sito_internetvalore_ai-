#!/usr/bin/env node
/**
 * Prerendering — ogni indirizzo della sitemap col suo HTML.
 *
 * Il sito è una single-page app: senza questo passo ogni indirizzo riceve lo stesso index.html
 * (titolo, descrizione e canonical della home) e il contenuto arriva solo col JavaScript.
 * Dopo `vite build` questo script apre ogni indirizzo della sitemap in un browser senza
 * interfaccia, aspetta che la pagina sia composta e salva l'HTML risultante in dist/, così il
 * server consegna a ogni indirizzo il suo titolo, la sua canonical, il suo testo e i suoi link.
 * L'applicazione parte comunque nel browser del visitatore e sostituisce il contenuto salvato.
 *
 * NON FA MAI FALLIRE LA BUILD: se il browser non parte o una pagina non si compone, lo scrive
 * nel log e lascia il sito com'era (single-page app). Con PRERENDER_STRICT=1 invece esce con
 * errore: serve in locale per accorgersi dei problemi.
 *
 * Dove gira il browser:
 *   - su Linux (Netlify): il Chromium del pacchetto @sparticuz/chromium;
 *   - altrove: il Chrome installato (CHROME_PATH per indicarne un altro).
 *
 * Uso:  node scripts/prerender.mjs [cartella della build, predefinita: dist]
 */
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.argv[2] || 'dist');
const STRICT = process.env.PRERENDER_STRICT === '1';
const PARALLELE = Math.max(1, Number(process.env.PRERENDER_PARALLELE || 4));
const ATTESA_MS = 45000;

const TIPI = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.mp4': 'video/mp4',
  '.webmanifest': 'application/manifest+json',
};

/** Server statico sulla build: i file veri, e per ogni altro indirizzo il modello index.html originale. */
function avviaServer(modello) {
  const server = http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const ext = path.extname(pathname).toLowerCase();
      const file = path.join(DIST, pathname);
      if (ext && ext !== '.html' && file.startsWith(DIST) && existsSync(file)) {
        res.writeHead(200, { 'content-type': TIPI[ext] || 'application/octet-stream' });
        res.end(await readFile(file));
        return;
      }
      if (ext && ext !== '.html') { res.writeHead(404); res.end(); return; }
      // Sempre il modello originale, anche se una pagina già salvata esiste: ogni pagina si
      // compone a partire dallo stesso punto, come sul sito senza prerendering.
      res.writeHead(200, { 'content-type': TIPI['.html'] });
      res.end(modello);
    } catch {
      res.writeHead(500); res.end();
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function avviaBrowser() {
  const puppeteer = (await import('puppeteer-core')).default;
  if (process.platform === 'linux') {
    const chromium = (await import('@sparticuz/chromium')).default;
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless ?? true,
    });
  }
  const candidati = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
  const eseguibile = candidati.find((p) => existsSync(p));
  if (!eseguibile) throw new Error('Chrome non trovato: indica il percorso con CHROME_PATH');
  return puppeteer.launch({ executablePath: eseguibile, headless: true, args: ['--no-sandbox'] });
}

/** Dove salvare la pagina: /it/ -> it/index.html ; /it/services/ecommerce -> it/services/ecommerce.html */
function fileDi(percorso) {
  if (percorso.endsWith('/')) return path.join(DIST, percorso, 'index.html');
  return path.join(DIST, `${percorso}.html`);
}

async function componi(browser, origine, percorso) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Solo le richieste al sito stesso: niente terze parti durante la build (più veloce, nessun
    // tracciamento, risultato ripetibile). I tag <img> e <script> esterni restano nell'HTML.
    await page.setRequestInterception(true);
    page.on('request', (r) => {
      const u = r.url();
      if (u.startsWith(origine) || u.startsWith('data:') || u.startsWith('blob:')) r.continue();
      else r.abort();
    });
    await page.goto(origine + percorso, { waitUntil: 'networkidle0', timeout: ATTESA_MS });
    // L'applicazione è montata (contenitore principale presente) e non ci sono caricamenti in corso.
    await page.waitForFunction(
      () => !!document.querySelector('#root > div.min-h-screen') && !document.querySelector('.animate-spin'),
      { timeout: ATTESA_MS },
    );
    await new Promise((r) => setTimeout(r, 300));
    const info = await page.evaluate(() => ({
      percorso: location.pathname,
      titolo: document.title,
      robots: (document.querySelector('meta[name="robots"]') || {}).content || '',
    }));
    if (info.percorso.replace(/\/$/, '') !== percorso.replace(/\/$/, '')) {
      return { percorso, saltata: `l'app reindirizza a ${info.percorso}` };
    }
    if (/noindex/i.test(info.robots)) return { percorso, saltata: 'pagina noindex' };
    const html = await page.content();
    const file = fileDi(percorso);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html.startsWith('<!DOCTYPE') || html.startsWith('<!doctype') ? html : `<!DOCTYPE html>${html}`, 'utf8');
    return { percorso, titolo: info.titolo, byte: html.length };
  } catch (e) {
    return { percorso, errore: String(e && e.message ? e.message : e).split('\n')[0].slice(0, 200) };
  } finally {
    await page.close().catch(() => {});
  }
}

async function main() {
  const inizio = Date.now();
  const modelloFile = path.join(DIST, 'index.html');
  const sitemapFile = path.join(DIST, 'sitemap.xml');
  if (!existsSync(modelloFile) || !existsSync(sitemapFile)) {
    throw new Error(`build non trovata in ${DIST} (servono index.html e sitemap.xml)`);
  }
  const modello = await readFile(modelloFile);
  const sitemap = await readFile(sitemapFile, 'utf8');
  const percorsi = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1].trim()).pathname))];
  if (!percorsi.length) throw new Error('nessun indirizzo nella sitemap');

  const server = await avviaServer(modello);
  const origine = `http://127.0.0.1:${server.address().port}`;
  let browser;
  const esiti = [];
  try {
    browser = await avviaBrowser();
    const coda = [...percorsi];
    await Promise.all(Array.from({ length: Math.min(PARALLELE, coda.length) }, async () => {
      while (coda.length) esiti.push(await componi(browser, origine, coda.shift()));
    }));
  } finally {
    if (browser) await browser.close().catch(() => {});
    server.close();
  }

  const scritte = esiti.filter((e) => e.titolo);
  const saltate = esiti.filter((e) => e.saltata);
  const errori = esiti.filter((e) => e.errore);
  for (const e of saltate) console.log(`prerender: saltata ${e.percorso} (${e.saltata})`);
  for (const e of errori) console.warn(`prerender: ERRORE ${e.percorso}: ${e.errore}`);
  console.log(`prerender: ${scritte.length} pagine scritte su ${percorsi.length} indirizzi della sitemap, `
    + `${saltate.length} saltate, ${errori.length} errori, in ${Math.round((Date.now() - inizio) / 1000)} s`);
  if (STRICT && (errori.length || !scritte.length)) process.exit(1);
}

main().then(() => process.exit(0)).catch((e) => {
  console.warn(`prerender: NON eseguito (${String(e && e.message ? e.message : e).split('\n')[0]}). `
    + 'Il sito resta una single-page app, come prima.');
  process.exit(STRICT ? 1 : 0);
});
