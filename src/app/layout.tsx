import './globals.css'
import './globalicons.css'
import { CartProvider } from '../components/CartContext'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: "Agrikhet | D2C Platform",
  description: "Buy directly from farmers. Fast, fresh, and affordable!",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">
        <CartProvider>
          <Navbar />
          <main className="flex-1 bg-gray-50">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
