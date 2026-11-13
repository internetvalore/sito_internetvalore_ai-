/**
 * Conversioni affidabili per i form.
 *
 * Il form, dopo un invio riuscito, mette in coda l'evento con `queueConversion`.
 * La pagina di ringraziamento lo consuma con `fireQueuedConversion`: l'evento parte
 * una sola volta e solo se c'è stato un invio reale. Aprire o ricaricare la pagina
 * di ringraziamento senza aver inviato il form non genera alcuna conversione.
 */

export type ConversionKind = 'analisi-ecommerce' | 'analisi-pmi' | 'contatti' | 'lp-outsourcing';

type ConversionParams = Record<string, string | number | boolean | null>;

type QueuedConversion = {
  event: string;
  event_id: string;
  params: ConversionParams;
};

const STORAGE_PREFIX = 'iv_pending_conversion_';

/** Riserva in memoria, usata se sessionStorage non è disponibile. */
const memoryQueue = new Map<ConversionKind, QueuedConversion>();

export const generateEventId = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

/** Da chiamare subito dopo un invio riuscito, prima di navigare alla pagina di ringraziamento. */
export function queueConversion(kind: ConversionKind, event: string, params: ConversionParams = {}): void {
  const queued: QueuedConversion = { event, event_id: generateEventId(), params };
  memoryQueue.set(kind, queued);
  try {
    window.sessionStorage.setItem(STORAGE_PREFIX + kind, JSON.stringify(queued));
  } catch {
    // sessionStorage non disponibile: resta la coda in memoria.
  }
}

/**
 * Da chiamare al caricamento della pagina di ringraziamento.
 * Restituisce true se l'evento è stato inviato al dataLayer.
 */
export function fireQueuedConversion(kind: ConversionKind, extra: ConversionParams = {}): boolean {
  let queued: QueuedConversion | undefined = memoryQueue.get(kind);
  memoryQueue.delete(kind);

  try {
    const raw = window.sessionStorage.getItem(STORAGE_PREFIX + kind);
    if (raw) {
      window.sessionStorage.removeItem(STORAGE_PREFIX + kind);
      queued = queued ?? (JSON.parse(raw) as QueuedConversion);
    }
  } catch {
    // sessionStorage non disponibile o contenuto non valido: si usa la coda in memoria.
  }

  if (!queued) return false;

  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: queued.event,
    event_id: queued.event_id,
    ...queued.params,
    ...extra,
  });
  return true;
}
