/**
 * Generate structured data (JSON-LD) for better SEO
 */
export function generateStructuredData() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DS-Finanças',
    description: 'Controle financeiro simplificado com chatbot inteligente',
    url: 'https://dsfinancas.com'
  });
}
