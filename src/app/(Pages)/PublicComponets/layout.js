"use client";
import Link from "next/link";
import { useState } from "react";
export default function ComponentsList({ children }) {
  const [buttonOpen, setButtonOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  return (
    <div className="flex bg-gray-100 gap-44 min-h-screen pt-14">
      {/* Left Menu */}
      <aside
        className="bg-gray-200 p-4 overflow-y-auto w-72 hidden lg:block"
      >
        <h2 className="text-xl font-bold mb-4">Products</h2>

        <ul className="space-y-5">
          <li>
            <Link
              href="/PublicComponets/install"
              className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
            >
              Install
            </Link>
          </li>

          <li>
            <Link
              href="/PublicComponets/clipbord"
              className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
            >
              Clipbord
            </Link>
          </li>

          <li>
            <Link
              href="/PublicComponets/gradient"
              className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
            >
              Gradient
            </Link>
          </li>

          {/* <li>
          <Link
            href="/PublicComponets/cards"
            className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
          >
            Card
          </Link>
        </li> */}

          {/* 🔽 Button Dropdown */}
          <li>
            <button
              onClick={() => setButtonOpen(!buttonOpen)}
              className="w-full text-left block p-2 bg-white rounded hover:bg-red-500 hover:text-white flex justify-between items-center"
            >
              Cards
              <span
                className={`transition-transform duration-200 ${
                  buttonOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {buttonOpen && (
              <ul className="mt-3 ml-4 space-y-3">
                <li>
                  <Link
                    href="/PublicComponets/cards/Card1"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Card 1
                  </Link>
                </li>

                <li>
                  <Link
                    href="/PublicComponets/cards/Card2"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Card 2
                  </Link>
                </li>

                <li>
                  <Link
                    href="/PublicComponets/cards/Card3"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Card 3
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/PublicComponets/Button"
              className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
            >
              Button
            </Link>
          </li>

          {/* 🔽 Carousel Dropdown */}
          <li>
            <button
              onClick={() => setCarouselOpen(!carouselOpen)}
              className="w-full text-left block p-2 bg-white rounded hover:bg-red-500 hover:text-white flex justify-between items-center"
            >
              Carousel
              <span
                className={`transition-transform duration-200 ${
                  carouselOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {carouselOpen && (
              <ul className="mt-3 ml-4 space-y-3">
                <li>
                  <Link
                    href="/PublicComponets/carousels/Carousel1"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Carousel 1
                  </Link>
                </li>

                <li>
                  <Link
                    href="/PublicComponets/carousels/Carousel2"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Carousel 2
                  </Link>
                </li>

                <li>
                  <Link
                    href="/PublicComponets/carousels/Carousel3"
                    className="block p-2 bg-gray-100 rounded hover:bg-red-400 hover:text-white"
                  >
                    Carousel 3
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      {/* Mobile Aside Dropdown */}
      <div className="lg:hidden fixed top-16 right-4 z-40">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-white shadow"
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
              <Link href="/PublicComponets/install">Install</Link>
            </li>
            <li>
              <Link href="/PublicComponets/clipbord">Clipboard</Link>
            </li>
            <li>
              <Link href="/PublicComponets/gradient">Gradient</Link>
            </li>

            {/* 🔽 Button Dropdown */}
            <li>
              <details>
                <summary>Cards</summary>
                <ul className="ml-2">
                  <li>
                    <Link href="/PublicComponets/cards/Card1">Card 1</Link>
                  </li>
                  <li>
                    <Link href="/PublicComponets/cards/Card2">Card 2</Link>
                  </li>
                  <li>
                    <Link href="/PublicComponets/cards/Card3">Card 3</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                href="/PublicComponets/Button"
                className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white"
              >
                Button
              </Link>
            </li>

            {/* 🔽 Button Dropdown */}
            <li>
              <details>
                <summary>Cards</summary>
                <ul className="ml-2">
                  <li>
                    <Link href="/PublicComponets/carousels/Carousel1">
                      Carousel 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/PublicComponets/carousels/Carousel1">
                      Carousel 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/PublicComponets/carousels/Carousel1">
                      Carousel 3
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Center Content */}
      <main className="flex-1 mt-4">
        <div className="mx-auto max-w-4xl p-10">{children}</div>
      </main>
    </div>
  );
}
