import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShagunPe - Digital India ka Digital Shagun App',
  description: 'Modernize the shagun experience using shagunPe digital shagun App',
  generator: 'Bansohi Technology Private Limited',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
