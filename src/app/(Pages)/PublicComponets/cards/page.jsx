import React from 'react'
import Card1 from './Card1/page'
import Card2 from './Card2/page'
import Card1layout from './Card1/layout'
import Card2layout from './Card2/layout'

function CardsMainPage() {
  return (
    <div>
      <h1>This is Card Main Page</h1>
      <div className='grid grid-cols-2 gap-3'>
        <Card1layout></Card1layout>
        <Card2layout></Card2layout>
      </div>
    </div>
  )
}

export default CardsMainPage
