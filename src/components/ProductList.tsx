'use client'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import LoadingSkeleton from './LoadingSkeleton'
import ErrorMessage from './ErrorMessage'

type Product = {
  id: number
  name: string
  image: string
  price: number
  category: string
  description: string
  available: boolean
  delivery: string
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false))
  }, [])

  let filtered = products
  if (category !== 'All') filtered = filtered.filter(p => p.category === category)
  if (query) filtered = filtered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

  if (loading) return <LoadingSkeleton />
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
