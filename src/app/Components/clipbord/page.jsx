import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Clipboardtext } from './value'

function Clipbord() {
  return (
    <div>
      <h1>
        This is clipboard
        <ClipboardFunconality text={Clipboardtext}></ClipboardFunconality>
      </h1>
    </div>
  )
}

export default Clipbord
