import Link from 'next/link'
import React, { Children } from 'react'

function Card1layout({children}) {
  return (
     <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className='flex gap-5 px-52 py-2'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/cards/Card1/cardPrivew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary '><Link href="/PublicComponets/cards/Card1/cardCode">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
    
  )
}

export default Card1layout
