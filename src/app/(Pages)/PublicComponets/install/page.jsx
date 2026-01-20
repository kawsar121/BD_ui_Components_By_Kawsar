import ClipboardFunconality from '@/app/Library/ClipboardFunconality'
import React from 'react'

function InstallContent() {
  return (
    <div className=''>
      <p className='text-xl mb-10'>Get started with Tailwind CSS Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
      <ClipboardFunconality text={`npm install tailwindcss @tailwindcss/vite`}></ClipboardFunconality>
    </div>
  )
}

export default InstallContent
