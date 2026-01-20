import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { ClipboardValue } from '../value'

function ClipCode() {
  return (
    <div className='w-xl rounded-lg border mt-5 p-5 h-80 overflow-y-auto'>
      <ClipboardFunconality text={ClipboardValue}></ClipboardFunconality>
    </div>
  )
}

export default ClipCode
