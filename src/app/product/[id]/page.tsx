'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCart } from '../../../components/CartContext'
import LoadingProductDetail from '../../../components/LoadingProductDetail'
import ErrorMessage from '../../../components/ErrorMessage'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [fourSimilarProd, setFourSimilarProd] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addToCart } = useCart()
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setTimeout(() => {
      if (!token) {
        router.push('/signup')
      }
    }, 100)
  }, [router])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const selected = data.find((p: any) => p.id == id)
        if (!selected) throw new Error()
        setProduct(selected)
        const cat = selected.category
        const relatedData = data.filter((p: any) => p.category === cat && p.id !== id)
        const shuffled = [...relatedData].sort(() => Math.random() - 0.5)
        setFourSimilarProd(shuffled.slice(0, 4))
      })
      .catch(() => setError('Failed to load product'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <LoadingProductDetail />
  if (error || !product) return <ErrorMessage message={error || 'Product not found'} />

  const imageLen = product.image.length

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % imageLen)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + imageLen) % imageLen)
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-6 flex flex-col gap-8">
      {/* <div className=" px-4 md:px-8 lg:px-20 flex "></div> */}
      {/* Top Section - Product Detail */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Carousel */}
        <div className="w-full md:w-3/5 relative">
          <Image
            src={product.image[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            width={600}
            height={320}
            className="w-full min-h-[15rem] max-h-[15rem] sm:max-h-[30rem] object-cover rounded"
          />
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full"
          >
            <span className="material-symbols-outlined font-bold">chevron_left</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full"
          >
            <span className="material-symbols-outlined font-bold">chevron_right</span>
          </button>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-2/5">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.category}</h2>
          <p className="text-base sm:text-lg mb-2">{product.description}</p>
          <p className="text-lg sm:text-xl font-bold text-green-600 mb-2">₹{product.price}</p>
          <p className="mb-2 font-semibold">Delivery: {product.delivery}</p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-200 rounded text-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="px-3 py-1 bg-gray-200 rounded text-lg"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              addToCart({ ...product, quantity })
              router.push('/cart')
            }}
            disabled={!product.available}
          >
            {product.available ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Similar Products */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl sm:text-3xl font-semibold text-center">Shop Similar</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fourSimilarProd.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
