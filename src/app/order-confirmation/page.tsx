'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Delivery = {
  name: string;
  city: string;
  street: string;
  zip: string;
  phone: string;
};

export default function OrderConfirmation() {
  const [delivery, setDelivery] = useState<Delivery | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTimeout(() => {
      if (!token) {
        router.push('/signup');
      } 
    }, 100);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('deliveryDetail');
    if (data) {
      setDelivery(JSON.parse(data));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-center flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Thank you for your order!
      </h1>

      {delivery && (
        <p className="text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl lg:max-w-3xl leading-relaxed px-2 sm:px-0">
          {`Your order has been placed successfully. It will be delivered to ${delivery.name}, ${delivery.street}, ${delivery.city}, ${delivery.zip}. For any queries, we may contact you at ${delivery.phone}.`}
        </p>
      )}

      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
      >
        Back to Home
      </Link>
    </div>
  );
}
