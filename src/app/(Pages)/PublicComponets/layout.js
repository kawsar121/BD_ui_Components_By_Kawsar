import Link from "next/link";

export default function ComponentsList({ children }) {
  return (
    <div className="flex bg-gray-100 gap-44 min-h-screen pt-14">

  {/* Left Menu */}
  <aside
    className="
      bg-gray-200 p-4 overflow-y-auto
      w-72
      hidden lg:block
    "
  >
    <h2 className="text-xl font-bold mb-4">Products</h2>

    <ul className="space-y-5">
      <li>
        <Link href="/PublicComponets/install" className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white">
          Install
        </Link>
      </li>
      <li>
        <Link href="/PublicComponets/clipbord" className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white">
          Clipbord
        </Link>
      </li>
      <li>
        <Link href="/PublicComponets/gradient" className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white">
          Gradient
        </Link>
      </li>
      <li>
        <Link href="/PublicComponets/cards" className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white">
          Card
        </Link>
      </li>
      <li>
        <Link href="/PublicComponets/Button" className="block p-2 bg-white rounded hover:bg-red-500 hover:text-white">
          Button
        </Link>
      </li>
    </ul>
  </aside>

  {/* Mobile Aside Dropdown */}
  <div className="lg:hidden fixed top-16 right-4 z-40">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-white shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
      >
        <li><Link href="/PublicComponets/install">Install</Link></li>
        <li><Link href="/PublicComponets/clipbord">Clipboard</Link></li>
        <li><Link href="/PublicComponets/gradient">Gradient</Link></li>
        <li><Link href="/PublicComponets/cards">Card</Link></li>
      </ul>
    </div>
  </div>

  {/* Center Content */}
  <main className="flex-1 mt-4">
    <div className="mx-auto max-w-4xl p-10">
      {children}
    </div>
  </main>

</div>

  );
}
