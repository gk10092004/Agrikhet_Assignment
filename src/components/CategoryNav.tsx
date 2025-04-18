'use client'
import { useState } from 'react'

const categories = ["All", "Snacks", "Beverages"]

export default function CategoryNav({ onSelect }: { onSelect?: (cat: string) => void }) {
  const [selected, setSelected] = useState("All")
  return (
    <div className="flex gap-4 mb-4">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            setSelected(cat)
            onSelect && onSelect(cat)
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
