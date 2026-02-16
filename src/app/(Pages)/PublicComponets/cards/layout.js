export default function CardsLayout({ children }) {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center uppercase">Cards Section</h1>
      {children}
    </div>
  );
}