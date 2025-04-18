'use client'
import { useCart } from '../../components/CartContext'
import Link from 'next/link'
import Image from 'next/image'
import LoadingCart from '@/components/LoadingCart'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 40 : 0
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + delivery + tax;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTimeout(() => {
      if (!token) {
        router.push('/signup');
      } 
    }, 100); // slight delay to prevent UI flicker
  }, [router]);

  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) return <LoadingCart />

  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-[0.5rem] flex flex-col gap-6 sm:gap-8">
      {/* <div className="w-full h-full px-[6rem] py-[0.5rem] flex flex-col gap-8  "></div> */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600">Shop now</Link></p>
      ) : (
        <div className="flex flex-col gap-4 h-[70vh] md:h-[75vh]">
          <ul className="overflow-auto scrollbar-hide">
            {cart.map(item => (
              <li key={item.id} className="flex  sm:flex-row sm:items-center gap-4 sm:gap-6 border-b py-4 sm:py-6">
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded mb-4 sm:mb-0"
                />

                <div className="flex-1  ">
                  <h2 className="font-semibold text-sm sm:text-base">{item.name}</h2>
                  <p className="text-sm sm:text-base">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-base">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-600 mt-4 sm:mt-0 text-sm sm:text-base"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-4 bg-gray-100 rounded w-full  mx-auto">
            <div className="flex justify-between text-sm sm:text-base"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between text-sm sm:text-base"><span>Tax (5%)</span><span>₹{tax}</span></div>
            <div className="flex justify-between text-sm sm:text-base"><span>Delivery</span><span>₹{delivery}</span></div>
            <div className="flex justify-between font-bold text-lg sm:text-xl"><span>Total</span><span>₹{total}</span></div>
            <Link 
              href="/checkout" 
              className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded text-center hover:bg-blue-700 text-sm sm:text-base"
            >
              Proceed to Checkout
            </Link>
            <button 
              onClick={clearCart} 
              className="mt-2 text-red-600 underline text-sm sm:text-base"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
