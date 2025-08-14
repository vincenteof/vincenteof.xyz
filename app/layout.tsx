import type { Metadata } from 'next'
import { Inter, Meow_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Vincenteof | Fullstack Developer',
  description:
    'Portfolio of Vincenteof, a Fullstack Developer specializing in modern web technologies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
