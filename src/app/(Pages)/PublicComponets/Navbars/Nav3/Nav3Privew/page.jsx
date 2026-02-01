'use client'
import React, { useState } from 'react'

function Nav3Privew() {
  const [open, setOpen] = useState()
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 gap-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Brand Logo</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-200 transition">Home</li>
          <li className="hover:text-yellow-200 transition">Services</li>
          <li className="hover:text-yellow-200 transition">Pricing</li>
          <li className="hover:text-yellow-200 transition">Contact</li>
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
          <p>Home</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  )
}

export default Nav3Privew