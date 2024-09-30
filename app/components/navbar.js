import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <Link href="/">
        <a className="text-white">Home</a>
      </Link>
    </nav>
  );
}
