'use client'
import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ErrorMessage from '@/components/ErrorMessage';
// import logo from '../assets/cmedial.png';

const Registation = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState('');
      const [showError, setShowError] = useState<boolean>(false);
      const router = useRouter();
      useEffect(() => {
          if (!error) return;
        
          const timer = setTimeout(() => setError(''), 3000);
          return () => {
            clearTimeout(timer);
            setShowError(false);
          };
        }, [error]);

const collectData = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      // signup successful
      alert('Signup successfull');
      router.push('/login'); // or dashboard
      
    } else {
      setError(data.error || 'Signup failed');
      setShowError(true);
    }
  };
  
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className={`absolute top-0 right-0 mr-[1rem] w-fit text-center mt-[1rem] 
                    transition-transform duration-500 ease-in-out ${showError ? 'translate-x-0' : 'translate-x-full'}`}
                  >
                    {error && <ErrorMessage message={error} />}
                  </div>
  <div className='bg-smbg bg-center bg-cover w-full h-full fixed hidden md:block z-[-1] blur-[1.5px] opacity-[0.6]'></div>

 
  <div className='w-full h-full md:w-[55%] lg:w-[45%] xl:w-[33%] md:h-[55%] lg:h-[50%] xl:h-[85%] p-6 bg-[#ffffff] shadow-dull md:rounded-xl'>
    <div className="action">
      <form onSubmit={collectData} className="fieldbox flex flex-col gap-4">
        <div className='flex justify-center'>
          <h1 className='text-xl font-bold'>Sign Up</h1>
        </div>

        
        <div className="div1 flex flex-col gap-1">
          <label className='text-sm font-bold'>Name</label>
          <input
            type="text"
            className='border border-gray-400 bg-transparent h-8 px-2 font-bold outline-none rounded'
            placeholder='Enter name'
            autoComplete='off'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        
        <div className="div1 flex flex-col gap-1">
          <label className='text-sm font-bold'>Email Address</label>
          <input
            type="email"
            className='border border-gray-400 bg-transparent h-8 px-2 font-bold outline-none rounded'
            placeholder='Enter email'
            autoComplete='off'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

      
        <div className="div1 flex flex-col gap-1">
          <label className='text-sm font-bold'>Password</label>
          <input
            type="password"
            className='border border-gray-400 bg-transparent h-8 px-2 font-bold outline-none rounded'
            placeholder='Create password'
            autoComplete='off'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        
        <button
          type="submit"
          className='mt-6 self-center border px-5 text-white text-sm font-semibold bg-[#1a1a75] py-1 rounded'
        >
          Sign Up
        </button>
      </form>
    </div>

    
    <div className="login flex mt-8 text-sm md:text-base">
      <p className='text-black font-semibold'>If you have an account then login here: </p>
      <Link href='/login' className='underline cursor-pointer text-blue-600 hover:text-black ml-1'>
        Login
      </Link>
    </div>
  </div>
</div>

  )
}

export default Registation;