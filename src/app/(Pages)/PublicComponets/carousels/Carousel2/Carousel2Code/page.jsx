import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Carousel2Value } from './carousel2Value'

function Carousel2Code() {
  return (
    <div className=' h-96 overflow-y-scroll'>
      <ClipboardFunconality text={Carousel2Value}></ClipboardFunconality>
    </div>
  )
}

export default Carousel2Code