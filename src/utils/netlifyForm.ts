/**
 * Invio di un form a Netlify Forms da una SPA.
 *
 * Il nome del form e ogni campo inviato devono essere dichiarati anche nel form
 * statico corrispondente in index.html: Netlify scarta i campi non dichiarati.
 */
export async function submitNetlifyForm(formName: string, fields: Record<string, string>): Promise<void> {
  const body = new URLSearchParams({
    'form-name': formName,
    ...fields,
    'bot-field': '',
  }).toString();

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    throw new Error(`Invio del form "${formName}" non riuscito (HTTP ${response.status})`);
  }
}
