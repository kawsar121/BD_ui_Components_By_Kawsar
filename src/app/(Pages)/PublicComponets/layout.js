import Link from "next/link";

export default function ComponentsList({ children }) {
  return (
    <div className="flex  min-h-screen bg-gray-100 gap-20">

      {/* Left Menu */}
      <aside className="w-52 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Products</h2>

        <ul className="space-y-2">
          <li>
            <Link href="/PublicComponets/clipbord" className="block p-2 bg-white rounded hover:bg-gray-300">
              Clipbord
            </Link>
          </li>
          <li>
            <Link href="/PublicComponets/gradient" className="block p-2 bg-white rounded hover:bg-gray-300">
              Gradient
            </Link>
          </li>
          <li>
            <Link href="/products/grocery" className="block p-2 bg-white rounded hover:bg-gray-300">
              Grocery
            </Link>
          </li>
        </ul>
      </aside>

      {/* Center Content */}
      <main className="mt-4">
        <div className="mx-auto max-w-4xl bg-white rounded shadow">
          {children}
        </div>
      </main>

    </div>
  );
}
