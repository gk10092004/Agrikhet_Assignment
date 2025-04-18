'use client'

export default function CartPage() {
  const cart = [1, 2];

  return (
    <div className="animate-pulse w-full h-full px-4 md:px-8 lg:px-20 py-6 flex flex-col gap-6 sm:gap-8">
      <h1 className="text-2xl font-bold mb-4 h-[2rem] bg-[#868686] w-1/3"></h1>

      <div className="flex flex-col gap-4 lg:h-[75vh]">
        <ul className="overflow-auto scrollbar-hide">
          {cart.map((item) => (
            <li
              key={item}
              className="flex  sm:flex-row sm:items-center gap-4 sm:gap-6 border-b py-4 sm:py-6 border-[#6a6a6a]"
            >
              <div className="w-20 h-20 bg-[#868686] object-cover rounded mb-4 sm:mb-0" />

              <div className="flex-1 flex flex-col gap-1">
                <div className="h-[1rem] w-[8rem] bg-[#b1b1b1]" />
                <div className="h-[1rem] w-[6rem] bg-[#b1b1b1]" />
                <div className="h-[1.5rem] w-[6rem] bg-[#b1b1b1]" />
              </div>

              <div className="h-[1.5rem] w-[6rem] bg-[#b1b1b1] mt-4 sm:mt-0" />
            </li>
          ))}
        </ul>

        <div className="mt-auto p-4 bg-[#e0e0e0] rounded w-full mx-auto flex flex-col gap-2">
          <div className="flex justify-between h-[1rem] bg-[#b1b1b1] w-full" />
          <div className="flex justify-between h-[1rem] bg-[#b1b1b1] w-full" />
          <div className="flex justify-between h-[1rem] bg-[#b1b1b1] w-full" />
          <div className="flex justify-between h-[1.5rem] bg-[#868686] w-full" />
          <div className="mt-4 bg-[#868686] h-[2rem] w-full rounded" />
          <div className="mt-2 bg-[#b1b1b1] w-[5rem] h-[1rem] self-start underline" />
        </div>
      </div>
    </div>
  );
}
