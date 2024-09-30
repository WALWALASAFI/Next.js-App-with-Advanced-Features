import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a className="text-blue-500">{product.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
