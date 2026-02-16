import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { InputValue } from './inputValue'

function InputCode() {
  return (
    <div className='h-96 overflow-y-scroll'>
        <h1>Input Code</h1>
        <ClipboardFunconality text={InputValue}></ClipboardFunconality>
    </div>
  )
}

export default InputCode