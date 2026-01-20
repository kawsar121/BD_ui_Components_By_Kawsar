import Link from 'next/link'
import React from 'react'

function layout({children}) {
  return (
      <div className='border-2  flex flex-col justify-center items-center p-5'>
        <div className='flex gap-5 border-2 px-52 py-2'>
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
