import React from 'react'

function CarouselLayout({children}) {
  return (
    <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className=' flex gap-5 px-52 py-2'>
            <h1 className='text-2xl whitespace-nowrap border-b-2 px-71 font-bold text-black uppercase'>Carousel Section</h1>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default CarouselLayout