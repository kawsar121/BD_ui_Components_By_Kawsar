import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { card2Value } from './card2Value'

function CardCode() {
  return (
    <div>
      <h1>card2</h1>
      <ClipboardFunconality text={card2Value}></ClipboardFunconality>
    </div>
  )
}

export default CardCode