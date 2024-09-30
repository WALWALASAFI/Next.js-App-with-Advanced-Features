
export async function getStaticPaths() {
  const res = await fetch("https://api.example.com/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/products/${params.id}`);
  const product = await res.json();
  
  // Fetch real-time stock information
  const stockRes = await fetch(`https://api.example.com/stock/${params.id}`);
  const stock = await stockRes.json();

  return {
    props: {
      product,
      stock,
    },
  };
}

export default function Product({ product, stock }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Stock: {stock.available ? "In Stock" : "Out of Stock"}</p>
      </div>
      <Footer />
    </div>
  );
}
