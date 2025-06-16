import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'DS FINANÇAS - Chatbot Financeiro Inteligente',
  description: 'O melhor chatbot para gestão financeira pessoal e empresarial. Controle total, zero complicações.',
  keywords: ['finanças', 'chatbot', 'gestão financeira', 'inteligência artificial'],
  authors: [{ name: 'DSYNCO' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} no-flicker`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-black text-white no-flicker`} suppressHydrationWarning>
        <main id="main-content" className="w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
