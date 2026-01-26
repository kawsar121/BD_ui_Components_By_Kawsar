import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Buttonvalue } from './buttonValue'

function ButtonCode() {
  return (
    <div>
        <ClipboardFunconality text={Buttonvalue}></ClipboardFunconality>
    </div>
  )
}

export default ButtonCode