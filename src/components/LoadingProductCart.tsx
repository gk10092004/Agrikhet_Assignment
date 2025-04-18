export default function LoadingProductCart() {
  const placeholders = Array.from({ length: 12 });

  return (
    <div className="animate-pulse w-full h-full px-6 sm:px-12">
      <div className="container py-6 flex flex-col">
        <h1 className="text-3xl font-bold mb-4 bg-[#dedede] h-[2.5rem] w-1/3 rounded"></h1>

        <div className="mb-4">
          <div className="bg-[#dedede] rounded h-[2.5rem] w-full"></div>
        </div>

        <div className="flex h-[2.5rem] bg-[#dedede] items-center gap-2 mb-4 rounded"></div>

        <div className="productlist flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {placeholders.map((_, idx) => (
              <div
                key={idx}
                className="border border-[#d8d8d8] w-full max-w-xs sm:max-w-sm rounded-lg p-4 shadow bg-white"
              >
                {/* Image placeholder with exact same layout ratio */}
                <div className="w-full aspect-[16/10] bg-[#b1b1b1] rounded mb-3"></div>

                <h2 className="text-lg sm:text-xl font-semibold bg-[#c2c2c2] h-[1.75rem] mb-2 rounded"></h2>
                <p className="text-base sm:text-lg font-bold bg-[#c2c2c2] h-[1.5rem] mb-2 rounded"></p>
                <p className="text-sm bg-[#c2c2c2] h-[1rem] mb-3 rounded"></p>
                <div className="h-[2rem] w-[5rem] bg-[#c2c2c2] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
