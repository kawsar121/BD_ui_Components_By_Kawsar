import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Nav2value } from './nav2Value'

function Nav2Code() {
  return (
    <div  className=' h-96 overflow-y-scroll'>
        <ClipboardFunconality text={Nav2value}></ClipboardFunconality>
    </div>
  )
}

export default Nav2Code