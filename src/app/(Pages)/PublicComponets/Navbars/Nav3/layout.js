import Link from 'next/link'
import React from 'react'

function Nav3Layout({children}) {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='flex gap-5 pb-3 mb-5'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/Navbars/Nav3/Nav3Privew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary '><Link href="/PublicComponets/Navbars/Nav3/Nav3Code">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Nav3Layout