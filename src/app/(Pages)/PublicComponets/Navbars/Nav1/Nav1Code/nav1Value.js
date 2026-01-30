export const Nav1value = `
"use client"; // If your project next.js, so you can use this 

import { useState } from "react";

export default function TransparentNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Brand</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-red-400 transition">Home</li>
          <li className="hover:text-red-400 transition">About</li>
          <li className="hover:text-red-400 transition">Services</li>
          <li className="hover:text-red-400 transition">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg px-6 py-4 space-y-4 text-white">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
      )}
    </nav>
  );
}

`;