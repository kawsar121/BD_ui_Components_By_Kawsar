import React from 'react'
import { Nav3value } from './nav3Value'
import ClipboardFunconality from '@/app/Library/ClipboardFunconality'

function Nav3Code() {
  return (
    <div className=' h-96 overflow-y-scroll'>
        <ClipboardFunconality text={Nav3value}></ClipboardFunconality>
    </div>
  )
}

export default Nav3Code