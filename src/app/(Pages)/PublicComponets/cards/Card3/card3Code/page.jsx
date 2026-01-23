import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'
import { Card3Value } from './card3value'

function Card3CodePage() {
  return (
    <div>Card3CodePage
      <ClipboardFunconality text={Card3Value}></ClipboardFunconality>
    </div>
  )
}

export default Card3CodePage