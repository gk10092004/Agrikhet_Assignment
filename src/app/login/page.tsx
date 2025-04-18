"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/ErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const LoginToHome = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
    
        const data = await res.json();
    
        if (res.ok) {
          // Store token and name in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('name', data.name);
    
          alert('Login successful');
          window.location.href = '/';
        } else {
          setError(data.error); // If you're using error state
          setShowError(true);
        }
      } catch (err) {
        console.error('Login failed:', err);
      }
    };
    
  
  

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={`absolute top-0 right-0 mr-[1rem] w-fit text-center mt-[1rem] 
              transition-transform duration-500 ease-in-out ${showError ? 'translate-x-0' : 'translate-x-full'}`}
            >
              {error && <ErrorMessage message={error} />}
            </div>
      <div className="bg-smbg bg-center bg-cover w-full h-full fixed hidden md:block z-[-1] blur-[1.5px] opacity-[0.6]"></div>

      <div className="w-full h-full md:w-[55%] lg:w-[45%] xl:w-[33%] md:h-[55%] lg:h-[50%] xl:h-[85%] p-6 bg-[#ffffff] shadow-dull md:rounded-xl">
        <div className="action">
          <form onSubmit={LoginToHome} className="fieldbox flex flex-col gap-4">
            <div className="flex justify-center">
              <h1 className="text-xl font-bold">Login</h1>
            </div>

            <div className="div1 flex flex-col gap-1">
              <div className="flex justify-between">
                <div className="text-sm font-bold">Email Address</div>
              </div>
              <input
                type="email"
                className="border border-gray-400 bg-transparent h-8 px-2 font-bold outline-none rounded"
                required
                autoComplete="off"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="div1 flex flex-col gap-1">
              <div className="flex justify-between">
                <div className="text-sm font-bold">Password</div>
              </div>
              <input
                type="password"
                className="border border-gray-400 bg-transparent h-8 px-2 font-bold outline-none rounded"
                required
                autoComplete="off"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-6 self-center border px-5 text-white text-sm font-semibold bg-[#1a1a75] py-1 rounded"
            >
              Login
            </button>
          </form>
        </div>

        {/* <div className="login flex mt-8 text-sm md:text-base">
          <p className="text-black font-semibold">Forgot password?</p>
          <div
            onClick={() => router.push("/password-reset")}
            className="underline cursor-pointer text-blue-600 hover:text-black ml-1"
          >
            Reset
          </div>
        </div> */}

        <div className="login flex mt-4 text-sm md:text-base">
          <p className="text-black font-semibold">
            If no account, sign up here:
          </p>
          <div
            onClick={() => router.push("/signup")}
            className="underline cursor-pointer text-blue-600 hover:text-black ml-1"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
