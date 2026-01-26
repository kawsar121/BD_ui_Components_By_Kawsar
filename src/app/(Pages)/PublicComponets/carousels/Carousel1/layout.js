import React from 'react'

function CarouselLayout() {
  return (
    <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className=' flex gap-5 px-52 py-2'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/gradient/garidentprivew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/gradient/gradientCode">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default CarouselLayout