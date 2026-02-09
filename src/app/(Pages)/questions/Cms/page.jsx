import React from 'react'
import CmsFaq from './CmsFaq'

function CmsMain() {
  return (
    <div className='border-2 p-20   h-96 overflow-y-scroll '>
      <h1 className='text-2xl '>Cms Questions</h1>
      <CmsFaq></CmsFaq>
    </div>
  )
}

export default CmsMain