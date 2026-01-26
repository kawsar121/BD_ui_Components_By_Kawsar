import React from 'react'

function CarouselLayout() {
  return (
    <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className=' flex gap-5 px-52 py-2'>
            <h1>Carusol Section</h1>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default CarouselLayout