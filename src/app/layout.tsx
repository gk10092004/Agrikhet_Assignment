import './globals.css'
import './globalicons.css'
import { CartProvider } from '../components/CartContext'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full">
        <CartProvider>
          <Navbar />
          {/* Make main grow to fill all space below navbar */}
          <main className="flex-1 bg-gray-50">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
