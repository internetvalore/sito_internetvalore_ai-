# Design system premium — Internet Valore

Obiettivo: UI pulita, elegante, "Apple-like". Nessuna modifica a testi, link, rotte, chiavi di traduzione, JSON-LD o logica. Si toccano **solo** attributi `className` / `style`.

## Token
- Ink (testo): `#1d1d1f` → secondario `#6e6e73`, terziario `#86868b`.
- Superfici: bianco `#ffffff`, paper `#f5f5f7`, dark `#0b0d10`.
- Accento: `#0071e3` (solo CTA, link, eyebrow). Hue decorative (indigo/violet/purple/pink) sono già rimappate a neutri nel tailwind config.
- Hairline: `1px solid rgba(29,29,31,0.10)` → classe `border-line`.
- Raggi: 8/10/12/14/18/20/24, `rounded-full` = pill.
- Ombre: leggere (già ridefinite nel tema). Nessun `shadow-neon`, nessuna ombra pesante.

## Classi componenti (uso obbligatorio, in `src/index.css` layer components)
`shell` (container 1180px) · `section` (`py-20 lg:py-24`) · `section-quiet` · `section-dark`
`eyebrow` / `eyebrow-quiet` · `title-xl` · `title-lg` · `lede` · `measure`
`card` / `card-quiet` / `card-hover` · `hairline` · `media`
`btn` + `btn-primary` / `btn-ghost` / `btn-dark` / `btn-sm` · `chip` · `icon-tile` · `navlink` · `rise`

## Regole
1. **Tipografia**: titoli `font-semibold` con tracking negativo (già nel tema), corpo `text-[0.95rem]`/`text-base` `text-ink-600`. Mai `font-bold`/`font-extrabold`. Eyebrow piccolo maiuscolo `tracking-[0.11em]`, mai grasso 700.
2. **Spazi**: sezioni `py-20 lg:py-24`, gap griglie `gap-6`/`gap-8`, padding card `26px 28px`.
3. **Card**: `card` + `card-hover`; alternate `card-quiet`. Niente bordi spessi, niente `border-b-2`.
4. **Bottoni**: sempre pill (`btn`). CTA primaria `btn-primary`, secondarie `btn-ghost`. Colori brand (WhatsApp green) → `btn-ghost` con icona, oppure `btn-dark`.
5. **Icone**: `icon-tile` neutro con accento; niente quadrati colorati pieni, niente rotate on hover.
6. **Motion**: `rise` o `whileInView` con `opacity`+`y<=14`, duration `0.5-0.6`, ease `[0.22,1,0.36,1]`, `viewport={{ once: true }}`. Niente spring, niente scale hover > 1.02, niente keyframes infiniti, niente blob animati (`blur-3xl`), niente flip 3D, niente shuffle casuale.
7. **Dark**: solo sezioni già scure o la sezione Stats della homepage. `section-dark` con testo `#f5f5f7`, card su dark = `rgba(255,255,255,0.04)` + hairline `rgba(255,255,255,0.10)`.
8. **Immagini**: involucro `media`, `object-cover`, alt preserved.
9. **Accessibilità & SEO**: `aria-label`, `alt`, `sr-only`, struttura heading e link identici. MetaTags/JSON-LD intoccabili.
10. Form: input con `border border-line rounded-xl bg-white px-4 py-3`, focus `outline-none ring-1 ring-accent-600`.

## Vietato
Cambiare parole, frasi, URL, `to=`, `href=`, chiavi `t('...')`, dati in `src/data`, `src/seo`, `src/i18n`. Cambiare l'ordine dei contenuti. Aggiungere testi nuovi.
