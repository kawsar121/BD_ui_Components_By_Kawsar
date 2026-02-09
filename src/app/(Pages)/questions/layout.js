"use client";
import Link from "next/link";
import { useState } from "react";
export default function QuestionLayouts({ children }) {
  const [button2Open, setButton2Open] = useState(false);
  const [carousel2Open, setCarousel2Open] = useState(false);
  const [nav2Open, setNav2Open] = useState(false);
  return (
    <div className="flex bg-gray-100 gap-0 md:gap-48 min-h-screen pt-14">
      {/* Left Menu */}
      <aside className="bg-gray-200 p-4 w-72 hidden lg:block h-225 overflow-y-scroll ">
        <h2 className="text-xl font-bold mb-4 mt-5 dark:text-black">All Question</h2>

        <ul className="space-y-5">
          <li>
             <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/Cms"
          >
            Cms
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/FrontEnd"
          >
            FrontEnd
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/Backend"
          >
            Backend
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/DjangoDeveloper"
          >
            DJango
          </Link>  
          </li>       
        </ul>
      </aside>

      {/* Mobile Aside Dropdown */}
      <div className="lg:hidden fixed top-16 right-4 z-40">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-white shadow mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-56 p-2 shadow space-y-1"
          >
            <li>
             <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/Cms"
          >
            Cms
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/FrontEnd"
          >
            FrontEnd
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/Backend"
          >
            Backend
          </Link>
          </li>

          <li>
            <Link
            className="block p-2 dark:text-black bg-white rounded hover:bg-red-500 hover:text-white"
            href="/questions/DjangoDeveloper"
          >
            DJango
          </Link>  
          </li>  
          </ul>
        </div>
      </div>

      {/* Center Content */}
      <main className="flex-1 w-full ">
        <div className="max-w-4xl p-4 sm:p-6 lg:p-20">{children}</div>
      </main>
    </div>
  );
}

