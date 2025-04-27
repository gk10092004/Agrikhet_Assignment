// 'use client'
// import { useState } from 'react'

// export default function SearchBar({ onSearch }: { onSearch?: (q: string) => void }) {
//   const [query, setQuery] = useState('')
//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="border rounded px-4 py-2 w-full"
//         value={query}
//         onChange={e => {
//           setQuery(e.target.value)
//           onSearch && onSearch(e.target.value)
//         }}
//       />
//     </div>
//   )
// }
