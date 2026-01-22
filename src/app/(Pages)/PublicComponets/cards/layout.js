export default function CardsLayout({ children }) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Cards Section</h1>
      {children}
    </div>
  );
}