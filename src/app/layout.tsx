import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/components.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'DS Finanças - Transforme sua vida financeira',
  description: 'Plataforma completa de educação e gestão financeira com IA integrada',
  keywords: 'finanças, controle financeiro, educação financeira, IA, gestão de dinheiro',
  authors: [{ name: 'DSYNCO' }],
  creator: 'DSYNCO',
  publisher: 'DSYNCO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dsfinancas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DS Finanças - Transforme sua vida financeira',
    description: 'Plataforma completa de educação e gestão financeira com IA integrada',
    url: 'https://dsfinancas.com',
    siteName: 'DS Finanças',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DS Finanças - Controle financeiro inteligente',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DS Finanças - Transforme sua vida financeira',
    description: 'Plataforma completa de educação e gestão financeira com IA integrada',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="bg-black text-white antialiased font-sans min-h-screen">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
