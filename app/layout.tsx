import './global.css'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apart - Your Real Estate Destination',
  description: 'Find your dream property with Apart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

