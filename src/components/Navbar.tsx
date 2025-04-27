'use client';
import Link from 'next/link';
import { useCart } from './CartContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [logShow, setLogShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user_name = localStorage.getItem('name');

    if (token && user_name) {
      setAuth(true);
      setName(user_name);
    } else {
      setAuth(false);
    }

    setIsMounted(true);
  }, []);

  const handleCancleLogout = () => {
    setLogShow(false);
  };

  const handleLogout = () => {
    setLogShow(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setAuth(false);
    setName('');
    setLogShow(false);
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  const navigateTo = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <nav className="relative bg-white shadow px-4 py-2 flex justify-between items-center">
      <Link href="/" className="text-[2rem] font-bold text-blue-600">
        Agrikhet
      </Link>

      
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      
      {isMounted && auth && (
        <div className="hidden lg:flex gap-[1rem] items-center">
          <button
            onClick={() => navigateTo('/cart')}
            className="relative flex"
          >
            <span className="material-symbols-outlined w-[2rem]">
              shopping_cart_checkout
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartCount}
              </span>
            )}
          </button>

          <div
            onClick={handleLogout}
            className="flex gap-[0.5rem] items-center cursor-pointer"
          >
            <div className="w-[1.8rem] h-[1.8rem] bg-[green] rounded-full"></div>
            <div className="font-semibold text-[1.2rem]">{name}</div>
          </div>
        </div>
      )}

      
      {isMounted && auth && menuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 bg-white w-full shadow-lg z-50 py-4 px-6">
          <div
            onClick={() => navigateTo('/cart')}
            className="relative flex items-center justify-between mb-4 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_cart_checkout</span>
              <span className="text-lg font-semibold">Cart</span>
            </div>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 text-xs">
                {cartCount}
              </span>
            )}
          </div>

          <div
            onClick={handleLogout}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="w-[1.8rem] h-[1.8rem] bg-[green] rounded-full"></div>
            <div className="font-semibold text-[1.2rem]">{name}</div>
          </div>
        </div>
      )}

      
      {logShow && (
        <div className="fixed top-0 left-0 w-full h-full z-[100] bg-[#787878e1] flex justify-center items-center">
          <div className="p-[0.5rem] flex flex-col bg-[#ffffffbf] rounded shadow-md">
            <div className="self-end">
              <span
                onClick={handleCancleLogout}
                className="material-symbols-outlined p-[0.1rem] text-black font-bold border border-black cursor-pointer rounded-[0.2rem]"
              >
                close
              </span>
            </div>
            <div
              onClick={handleConfirmLogout}
              className="px-[1.5rem] py-[0.15rem] cursor-pointer font-semibold text-[1.2rem] rounded-[0.5rem] text-white bg-black"
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
