export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">W~Safi Store</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
        </ul>
      </div>
    </nav>
  );
}
