import Link from 'next/link'
import React from 'react'

function Carousel3Layout({children}) {
  return (
    <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className=' flex gap-5 px-52 py-2'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/carousels/Carousel3/Carousel3Privew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/carousels/Carousel3/Carousel3Code">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Carousel3Layout