export const Card3Value = `
<div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6">
      {/* Glass Card */}
      <div className="w-full max-w-sm sm:max-w-md rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30
        shadow-xl p-6 sm:p-8 text-white">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
          alt="Fashion"
          className="w-full h-48 sm:h-56 object-cover rounded-xl mb-5"
        />

        {/* Content */}
        <h2 className="text-xl sm:text-2xl font-semibold">
          Glass Style Jacket
        </h2>

        <p className="text-sm sm:text-base text-white/80 mt-2">
          Premium fashion with modern glassmorphism design. Stylish & elegant.
        </p>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
          <span className="text-lg font-bold">
            ৳3,999
          </span>

          <button className="px-5 py-2.5 rounded-lg 
            bg-white/30 hover:bg-white/40
            backdrop-blur-md transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
`;