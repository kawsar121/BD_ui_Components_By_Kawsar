import Link from 'next/link'
import React from 'react'

function layout({children}) {
  return (
    <div>
      <div>
        
        <div className='border-2 p-5 flex gap-10'>
            <button className='btn bg-amber-200 text-black'><Link href="/PublicComponets/gradient/garidentprivew">Privew</Link></button>
            <button className='btn bg-amber-200 text-black'><Link href="/PublicComponets/gradient/gradientCode">Code</Link></button>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default layout
