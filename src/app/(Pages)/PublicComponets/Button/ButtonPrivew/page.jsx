import React from 'react'

function ButtonPrivew() {
  return (
<div className='grid grid-cols-4 gap-4'>



<button className="
  relative inline-flex items-center justify-center
  px-7 py-3
  text-sm font-semibold tracking-wide
  text-white
  rounded-xl
  bg-gradient-to-r from-indigo-600 to-blue-600
  shadow-md shadow-indigo-500/30
  hover:shadow-lg hover:shadow-indigo-500/40
  hover:from-indigo-500 hover:to-blue-500
  active:scale-[0.98]
  transition-all duration-300
">
  Get Started
</button>



<button className="
  group relative inline-flex items-center justify-center
  px-8 py-3
  text-sm font-semibold tracking-wide
  text-white
  rounded-xl
  bg-gradient-to-b from-sky-500 to-pink-400
  shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]
  hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.7)]
  active:translate-y-[1px]
  transition-all duration-300
">
  <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
  <span className="relative">Get Started</span>
</button>



<button className="
  px-8 py-3
  text-sm font-semibold
  text-white
  rounded-xl
  bg-indigo-600/80 backdrop-blur-xl
  border border-indigo-400/30
  shadow-lg shadow-indigo-500/30
  hover:bg-indigo-600
  transition-all duration-300
">
  Analytics
</button>

<button className="
  px-6 py-2
  text-sm font-medium
  text-gray-800
  rounded-lg
  bg-gray-300
  hover:bg-gray-500
  transition-colors duration-300
">
  View Details
</button>


<button className="
  px-7 py-3
  text-sm font-semibold
  text-gray-700
  rounded-xl
  border border-gray-300
  bg-white
  hover:bg-gray-50
  hover:border-gray-400
  active:scale-[0.98]
  transition-all duration-300
">
  Learn More
</button>







<button className="
  px-8 py-3
  text-sm font-semibold
  text-gray-800
  rounded-xl
  border border-gray-300
  bg-white
  hover:border-gray-400
  hover:bg-gray-50
  shadow-sm
  active:scale-[0.98]
  transition-all duration-300
">
  Request Demo
</button>



<button className="
  px-7 py-3
  text-sm font-semibold
  text-white
  rounded-lg
  bg-neutral-900
  hover:bg-neutral-800
  shadow-md
  transition-all duration-300
">
  Continue
</button>


<button className="
  px-8 py-3
  text-sm font-semibold
  text-gray-800
  rounded-xl
  bg-black/5 backdrop-blur-xl
  border border-black/10
  shadow-md
  hover:bg-black/10
  transition-all duration-300
">
  Analytics
</button>



    </div>
  )
}

export default ButtonPrivew