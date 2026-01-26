import Link from 'next/link'
import React from 'react'

function Carousel2Layout({children}) {
  return (
    <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className=' flex gap-5 px-52 py-2'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/Carousel1/Carousel1Privew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/Carousel1/Carousel1Code">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Carousel2Layout