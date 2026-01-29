import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Carousel1value } from './carousel1value'

function Carousel1Code() {
  return (
    <div className=' h-96 overflow-y-scroll'>
      <ClipboardFunconality text={Carousel1value}></ClipboardFunconality>
    </div>
  )
}

export default Carousel1Code