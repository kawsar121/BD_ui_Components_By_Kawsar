import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { ClipboardValue } from '../value'

function ClipCode() {
  return (
    <div className='w-xl rounded-lg border mt-0 md:mt-2 p-20 md:p-5 h-80 overflow-y-auto'>
      <ClipboardFunconality text={ClipboardValue}></ClipboardFunconality>
    </div>
  )
}

export default ClipCode
