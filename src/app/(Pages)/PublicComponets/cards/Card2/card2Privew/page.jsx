import React from 'react'

function CardPrivew() {
  return (
     <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
          alt="Fashion Product"
          className="w-full h-52 sm:h-60 lg:h-72 object-cover"
        />

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Trendy Outfit
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Premium quality fabric with modern design. Perfect for daily & party wear.
          </p>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5">
            <span className="text-base sm:text-lg font-bold text-pink-600">
              ৳2,499
            </span>

            <button className="w-full sm:w-auto px-5 py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPrivew