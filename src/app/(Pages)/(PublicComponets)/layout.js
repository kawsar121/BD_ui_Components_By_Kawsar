import Link from "next/link";

export default function ComponentsList({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 gap-12">

      {/* Left Menu */}
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Products</h2>

        <ul className="space-y-2">
          <li>
            <Link href="Components/clipbord" className="block p-2 bg-white rounded hover:bg-gray-300">
              Clipbord
            </Link>
          </li>
          <li>
            <Link href="/products/fashion" className="block p-2 bg-white rounded hover:bg-gray-300">
              Fashion
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
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl bg-white p-6 rounded shadow">
          {children}
        </div>
      </main>

    </div>
  );
}
