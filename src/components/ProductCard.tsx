import Link from 'next/link'
import Image from 'next/image'

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
  available: boolean;
  delivery: string;
};
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-[#d8d8d8] w-full max-w-xs sm:max-w-sm rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      {product.image?.[0] && (
        <Image
          src={product.image[0]}
          alt={product.name}
          width={400} 
          height={250}
          layout="responsive"
          objectFit="cover"
          className="rounded"
        />
      )}
      <h2 className="text-lg sm:text-xl font-semibold mt-3">{product.name}</h2>
      <p className="text-base sm:text-lg font-bold text-green-600">₹{product.price}</p>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <Link
        href={`/product/${product.id}`}
        target="_blank"
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
      >
        View
      </Link>
    </div>
  )
}
