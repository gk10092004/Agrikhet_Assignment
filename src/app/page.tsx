'use client'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingProductCart from '@/components/LoadingProductCart';
import ErrorMessage from '@/components/ErrorMessage';
import ProductCard from '@/components/ProductCard';

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

export default function Home() {
  const [categories, setCategories] = useState<Array<string>>([]);
  const [selected, setSelected] = useState('All');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        router.push('/');
      } else {
        router.push('/signup');
      }
    }, 100);
  }, [router]);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByItems = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = 120;
    const scrollAmount = itemWidth * 5;
    container.scrollBy({
      left: dir === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        const allCategory = [
          'All',
          ...Array.from(new Set(data.map((p: Product) => p.category))) as string[],
        ];
        setCategories(allCategory);
      })
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (cat: string) => {
    const result = products.filter((p) => p.category.toLowerCase() === cat.toLowerCase());
    if (result.length) setFiltered(result);
    else setFiltered(products);
  };

  const handleSeachFilter = (query: string) => {
    setQuery(query);
    const q = query.toLowerCase().trim().replace(/\s+/g, '');
    if (!q) {
      if (selected === 'All') setFiltered(products);
      else {
        const result = products.filter(
          (p) => p.category.toLowerCase() === selected.toLowerCase()
        );
        setFiltered(result);
      }
      return;
    }
    const result = products
      .filter((p) => selected === 'All' || p.category.toLowerCase() === selected.toLowerCase())
      .filter((p) => p.name.toLowerCase().replace(/\s+/g, '').includes(q));
    setFiltered(result);
  };

  if (loading) return <LoadingProductCart />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="w-full h-full px-4 md:px-8 lg:px-20 flex justify-center">
      <div className="container py-6 flex flex-col w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Featured Products</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products name..."
            className="border rounded px-4 py-2 w-full"
            value={query}
            onChange={(e) => handleSeachFilter(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => scrollByItems('left')}
            className="px-2 py-1 bg-gray-300 rounded flex items-center"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide max-w-full"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded whitespace-nowrap text-sm md:text-base ${
                  selected === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
                onClick={() => {
                  setSelected(cat);
                  handleFilter(cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollByItems('right')}
            className="px-2 py-1 bg-gray-300 rounded flex items-center"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="productlist flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
