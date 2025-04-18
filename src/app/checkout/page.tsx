'use client'
import { useEffect, useState } from 'react'
import { useCart } from '../../components/CartContext'
import ErrorMessage from '@/components/ErrorMessage'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import LoadingCheckOut from '@/components/LoadingCheckOut'

export default function CheckoutPage() {
  
  const [error,setError] = useState('');
  const [showError, setShowError] = useState<boolean>(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false);
  }, [])
  useEffect(() => {
    if (!error) return;
  
    const timer = setTimeout(() => setError(''), 3000);
    return () => {
      clearTimeout(timer);
      setShowError(false);
    };
  }, [error]);
  //cart summary
  const { cart, updateQuantity,  clearCart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? 40 : 0
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + delivery + tax
  //cart summary end
  
  const [step, setStep] = useState(1)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [city, setCity] = useState('')
  const [sname, setSname] = useState('')
  const [zcode, setZcode] = useState('')
  const [phone, setPhone] = useState('')
  const [promo,setPromo] = useState('');
  const router = useRouter()
  const [promovalid,setPromovalid] = useState(false);
  const [totalCost, setTotalCost] = useState<number>(0);
    
  useEffect(() => {
    const token = localStorage.getItem('token');
  
    setTimeout(() => {
      if (!token) {
        router.push('/signup');
      } 
    }, 100); // slight delay to prevent UI flicker
  }, [router]);
  useEffect(() => {
    setTotalCost(Number(total));
  }, [total]);
    
  // const [check,setCheck] = useState(false);
  const [payment, setPayment] = useState('cod')

  if (loading) return <LoadingCheckOut />
  if (cart.length === 0) return <div className="container px-[2rem] mx-auto py-8">Your cart is empty.</div>


  

  const handlePayContinue = () => {
    if(!fname || !lname || !city || !sname || !zcode || !phone){
        setError("all field is required for delivery")
        setShowError(true)
    }
    else {const data = {
      name:fname + " " + lname,
      city:city,
      street:sname,
      zip:zcode,
      phone:phone
    }
    localStorage.setItem('deliveryDetail',JSON.stringify(data));
    setStep(2);}
  }
  
  const handleChangePromo = (val:string) => {
    setPromo(val);
    setPromovalid(false);
    setTotalCost(total);
  }
  const handleApplyPromo = () => {
    if(promo === "save10p"){
      setTotalCost(total - total*10/100);
      setPromovalid(true);
    }else if(promo === "save5p"){
      setTotalCost(total - total*5/100);
      setPromovalid(true);
    }else if(promo === "save7p"){
      setTotalCost(total - total*7/100);
      setPromovalid(true);
    }else if(promo === "save15p"){
      setTotalCost(total - total*15/100);
      setPromovalid(true);
    }else if(promo === "agri50"){
      const money = total - 50;
      if(money>0){
        setTotalCost(money);
        setPromovalid(true);
      }
      else{
        setTotalCost(total);
        setError("this promo card not applicable on this price")
      }      
    }else if(promo === "agri100"){
      const money = total - 100;
      if(money>0){
        setTotalCost(money);
        setPromovalid(true);
      }
      else{
        setTotalCost(total);
        setError("this promo card not applicable on this price")
      }   
    }else{
      // alert("Invalid promo card");
      setError("Invalid promo card");
      setShowError(true);
      setPromovalid(false);
    }
  }
  
  
  

  return (
    <div className="w-full h-full px-4 md:px-[6rem] py-[0.5rem] flex flex-col">
      <div className={`absolute top-0 right-0 mr-[1rem] w-fit text-center mt-[1rem] 
        transition-transform duration-500 ease-in-out ${showError ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {error && <ErrorMessage message={error} />}
      </div>

      <h1 className="text-xl md:text-2xl font-bold mb-4">Checkout</h1>
      <div className='flex flex-col pb-[2rem] md:flex-row gap-4 md:gap-[2rem]'>
        <div className='flex-1 order-2 sm:order-1  '>
          {step === 1 && (
            <div className='flex  flex-col gap-4'>
              <div className='flex  order-2 sm:order-1 flex-col gap-2'>
                <div className='p-4 md:p-[1rem] rounded-lg bg-[#f3f3f3] flex flex-col gap-2'>
                  <h1 className='text-lg md:text-[1.2rem] font-bold'>Delivery Address</h1>
                  <div className='flex flex-col  gap-2'>
                    <div className='flex flex-col  md:flex-row gap-2'>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">First Name<span className='text-red-500'>*</span></h2>
                        <input
                          type='text'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={fname}
                          onChange={e => setFname(e.target.value)}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">Last Name<span className='text-red-500'>*</span></h2>
                        <input
                          type='text'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={lname}
                          onChange={e => setLname(e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">City<span className='text-red-500'>*</span></h2>
                        <input
                          type='text'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={city}
                          onChange={e => setCity(e.target.value)}
                          placeholder="Enter your city"
                        />
                      </div>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">Street Name<span className='text-red-500'>*</span></h2>
                        <input
                          type='text'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={sname}
                          onChange={e => setSname(e.target.value)}
                          placeholder="Enter your street name"
                        />
                      </div>
                    </div>
                    <div className='flex flex-col  md:flex-row gap-2'>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">Zip Code<span className='text-red-500'>*</span></h2>
                        <input
                          type='number'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={zcode}
                          onChange={e => setZcode(e.target.value)}
                          placeholder="Enter your zip code"
                        />
                      </div>
                      <div className='flex-1'>
                        <h2 className="text-[#3a3a3a] text-sm">Phone<span className='text-red-500'>*</span></h2>
                        <input
                          type='number'
                          className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Repeat similar structure for other input groups */}
                    
                  </div>
                </div>

                <button
                  className="bg-blue-600 text-white px-6 py-2 font-semibold cursor-pointer rounded"
                  onClick={handlePayContinue}
                >
                  Continue to Payment
                </button>
              </div>

              <div className='p-4 md:p-[1rem] order-1 sm:order-2  rounded-lg bg-[#f3f3f3] flex flex-col gap-2'>
                <div className='flex flex-col md:flex-row gap-2'>
                  <div className='flex-1'>
                    <h2 className="text-[#3a3a3a] text-sm">Promo Code</h2>
                    <input
                      type='text'
                      className="border text-black font-semibold border-x-0 border-t-0 text-sm w-full p-2 outline-0"
                      value={promo}
                      onChange={(e)=>handleChangePromo(e.target.value)}
                    />
                  </div>
                  <div className='flex items-center gap-2'>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-sm md:text-base"
                      onClick={handleApplyPromo}
                    >
                      Apply Promo
                    </button>
                    {promovalid && (
                      <span className="material-symbols-outlined text-white p-1 bg-green-500 rounded-full">
                        check
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className='space-y-4'>
              <h2 className="font-semibold text-lg">Payment Method</h2>
              <select className="border rounded w-full p-2" value={payment} onChange={e => setPayment(e.target.value)}>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card (Mock)</option>
              </select>
              <div className='flex gap-2'>
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex-1" onClick={() => setStep(1)}>
                  Back
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded flex-1"
                  onClick={() => {
                    setTimeout(() => clearCart(), 1000);
                    router.push('/order-confirmation');
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        <div className='flex-1 order-1 sm:order-2 p-4 md:p-[1rem] rounded-lg bg-[#f3f3f3]'>
          <div className="container">
            <h1 className="text-lg md:text-2xl font-bold">Order Summary</h1>
            {cart.length === 0 ? (
              <p className='' >Your cart is empty. <Link href="/" className="text-blue-600">Shop now</Link></p>
            ) : (
              <div className='flex flex-col gap-4 h-[50vh] md:h-[70vh]'>
                <ul className='overflow-auto scrollbar-hide space-y-4'>
                  {cart.map(item => (
                    <li key={item.id} className="flex items-center gap-2 md:gap-4 border-b py-4">
                      <Image
                        src={item.image[0]}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h2 className="font-semibold text-sm md:text-base">{item.name}</h2>
                        <p className="text-sm">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} 
                          className="px-2 py-1 bg-gray-200 rounded text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="px-2 py-1 bg-gray-200 rounded text-sm"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-gray-100 rounded space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span>₹{delivery}</span>
                  </div>
                  {promovalid && (
                    <div className="flex justify-between "><span>Promo Discount</span><span>- ₹{Number((total-totalCost).toFixed(3))}</span></div>
                  )}
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{totalCost}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}







