import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Carousel3value } from './course3value'

function Carousel3CodePage() {
  return (
    <div className=' h-96 overflow-y-scroll'>
      <ClipboardFunconality text={Carousel3value}></ClipboardFunconality>
    </div>
  )
}

export default Carousel3CodePage