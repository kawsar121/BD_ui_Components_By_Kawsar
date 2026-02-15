import React from 'react'
import CmsFaq from './CmsFaq'

function CmsMain() {
  return (
    <div className='overflow-y-scroll '>
      <h1 className='text-3xl font-bold text-center'>Cms Questions</h1>
      <CmsFaq></CmsFaq>
    </div>
  )
}

export default CmsMain