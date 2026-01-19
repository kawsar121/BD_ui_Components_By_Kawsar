import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { GradientValue } from '../value'

function page() {
  return (
    <div>
       <h1>Gradient code follow the instruction</h1>
       <ClipboardFunconality text={GradientValue}></ClipboardFunconality>
    </div>
  )
}

export default page
