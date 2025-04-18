'use client'
import React from 'react'

export default function LoadingCart() {
  return (
    <div className="w-full h-full px-4 md:px-[6rem] py-[0.5rem] flex flex-col gap-6 animate-pulse">
      <div className="h-8 w-40 bg-gray-300 rounded"></div>

      <div className="flex flex-col h-full md:flex-row gap-6">
        {/* Left Panel (Form) */}
        <div className="flex-1 space-y-6">
          {/* Delivery Address Skeleton */}
          <div className="bg-gray-200 rounded-lg p-4 space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
            </div>
            {/* <div className="flex-1 h-10 bg-gray-300 rounded"></div> */}
          </div>
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
          {/* Promo Code Skeleton */}
          <div className="bg-gray-200 rounded-lg p-4 space-y-4">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
              <div className="w-28 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* <div className="h-10 w-48 bg-gray-400 rounded"></div> */}
        </div>

        {/* Right Panel (Order Summary) */}
        <div className="flex-1 space-y-6 bg-gray-200 p-4 mb-[1rem] rounded-lg">
          <div className="h-6 w-32 bg-gray-300 rounded"></div>

       
          <div className="space-y-4 overflow-auto h-[50vh]">
            {Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="flex gap-4 items-center border-b pb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
                  <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>

         
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>
            <div className="flex justify-between font-bold">
              <div className="h-4 w-24 bg-gray-400 rounded"></div>
              <div className="h-4 w-16 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
