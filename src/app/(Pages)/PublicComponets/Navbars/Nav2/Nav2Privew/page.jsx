"use client";

import { useState } from "react";

function Nav2Privew() {
    const [open, setOpen] = useState(false);
  return (
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-blue-500 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-20 justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Brand</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 text-white font-semibold">
          <li className="hover:text-pink-300 transition">Home</li>
          <li className="hover:text-pink-300 transition">Portfolio</li>
          <li className="hover:text-pink-300 transition">Blog</li>
          <li className="hover:text-pink-300 transition">Contact</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden px-6 py-4 space-y-4 text-white bg-white/10 backdrop-blur-xl">
          <p>Home</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  )
}

export default Nav2Privew