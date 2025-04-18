'use client';

export default function ProductDetail() {
  const filtered = [1, 2, 3, 4];
  return (
    <div className="animate-pulse w-full px-4 md:px-8 lg:px-20 py-6 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Placeholder */}
        <div className="w-full md:w-3/5 relative">
          <div className="w-full min-h-[15rem] max-h-[15rem] sm:min-h-[30rem] sm:max-h-[30rem] bg-[#b1b1b1] object-cover rounded"></div>
        </div>

        {/* Product Info Placeholder */}
        <div className="w-full md:w-2/5 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold h-[4rem] bg-[#b1b1b1] mb-3"></h1>
          <h2 className="text-lg sm:text-xl font-semibold h-[2.5rem] bg-[#b1b1b1] mb-3"></h2>
          <p className="text-base sm:text-lg mb-3 w-full h-[6.5rem] bg-[#b1b1b1]"></p>
          <p className="text-lg sm:text-xl mb-3 w-full h-[1.5rem] bg-[#b1b1b1]"></p>
          <p className="text-lg sm:text-xl mb-3 w-full h-[1.5rem] bg-[#b1b1b1]"></p>

          {/* Quantity Controls Placeholder */}
          <div className="flex items-center w-[4rem] h-[2rem] bg-[#dedede] self-start gap-2 mb-4"></div>

          {/* Add to Cart Button Placeholder */}
          <div className="w-[8rem] h-[2.5rem] bg-[#dedede] self-start rounded"></div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl sm:text-3xl font-semibold text-center h-[3rem] bg-[#b1b1b1]"></div>
        <div className="productlist flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.isArray(filtered) &&
              filtered.map((product, id) => (
                <div
                  key={id}
                  className="border-[#d8d8d8] border w-full sm:w-[18rem] md:w-[20rem] rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
                >
                  <div className="w-full bg-[#b1b1b1] h-[15rem] sm:h-[18rem] object-cover rounded"></div>

                  <h2 className="text-xl sm:text-2xl font-semibold bg-[#c2c2c2] h-[2rem] mt-2"></h2>
                  <p className="text-lg font-bold text-green-600 mt-2 bg-[#c2c2c2] h-[1.5rem]"></p>
                  <p className="text-sm sm:text-base text-gray-500 bg-[#c2c2c2] h-[1rem] mt-2"></p>
                  <div className="mt-2 h-[2rem] w-[3rem] inline-block bg-[#c2c2c2] px-4 py-2 rounded"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
