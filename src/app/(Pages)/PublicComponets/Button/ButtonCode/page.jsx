import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Buttonvalue } from './buttonValue'

function ButtonCode() {
  return (
    <div className=' h-96 overflow-y-scroll'>
        <ClipboardFunconality text={Buttonvalue}></ClipboardFunconality>
    </div>
  )
}

export default ButtonCode