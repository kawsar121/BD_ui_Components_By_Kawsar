import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'

function ClipPrivew() {
  return (
    <div className=' p-20 md:p-5 rounded-lg border mt-5'>
      <ClipboardFunconality text={`https://example.com/my-link`}></ClipboardFunconality>
    </div>
  )
}

export default ClipPrivew

