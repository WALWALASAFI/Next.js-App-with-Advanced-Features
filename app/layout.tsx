import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto my-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
