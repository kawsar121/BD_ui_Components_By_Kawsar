import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'

function ClipPrivew() {
  return (
    <div className='w-xl p-5 rounded-lg border mt-5'>
      <ClipboardFunconality text={`https://example.com/my-link`}></ClipboardFunconality>
    </div>
  )
}

export default ClipPrivew

