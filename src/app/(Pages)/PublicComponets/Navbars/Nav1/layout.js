import Link from 'next/link'
import React from 'react'

function Nav1Layout({children}) {
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='flex gap-5 px-81 border-b-2 pb-3 mb-5'>
            <button className='btn btn-outline btn-secondary'><Link href="/PublicComponets/Navbars/Nav1/Nav1Privew">Privew</Link></button>
            <button className='btn btn-outline btn-secondary '><Link href="/PublicComponets/Navbars/Nav1/Nav1Code">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Nav1Layout