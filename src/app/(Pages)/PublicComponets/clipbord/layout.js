import Link from 'next/link'
import React from 'react'

function layout({children}) {
  return (
      <div>
        <div className='border-2 p-5 flex gap-10'>
            <button className='btn bg-amber-200 text-black'><Link href="/PublicComponets/clipbord/clipprivew">Privew</Link></button>
            <button className='btn bg-amber-200 text-black'><Link href="/PublicComponets/clipbord/clipCode">Code</Link></button>
        </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default layout
