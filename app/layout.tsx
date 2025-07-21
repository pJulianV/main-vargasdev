import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Julian Vargas',
  description: 'Python Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="shortcut icon" href="/img/icons8-diamond-16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Open+Sans:wght@300;400;700&family=Poppins:wght@300&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}