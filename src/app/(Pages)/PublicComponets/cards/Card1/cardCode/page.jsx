import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { card1Value } from './card1Value'

function CardCode() {
  return (
    <div><h1>CardCode</h1>
      <ClipboardFunconality text={card1Value}></ClipboardFunconality>
    </div>
    
  )
}

export default CardCode