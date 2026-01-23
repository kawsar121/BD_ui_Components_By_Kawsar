export const card1Value = `
<div className="max-w-sm rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">  
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="Product"
        className="h-56 w-full object-cover"
      />
      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Premium Watch
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Elegant design with premium materials. Perfect for modern lifestyle.
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-lg font-bold text-indigo-600">
            $149
          </span>

          <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
`;