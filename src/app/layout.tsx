import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from './providers'
import { generateStructuredData } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DS CHECKOUT | Checkout próprio para seu negócio',
  description: 'Checkout próprio. Zero taxas escondidas. Controle total. Transforme a forma como você vende online.',
  keywords: 'checkout, vendas online, ecommerce, pagamentos, zero taxas',
  metadataBase: new URL('https://dscheckout.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData(),
          }}
        />
      </head>
      <body className={`min-h-screen bg-black text-white antialiased ${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
