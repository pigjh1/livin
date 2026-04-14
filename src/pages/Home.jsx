import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";
import useCartStore from "../store/cartStore";
import SkeletonCard from "../components/SkeletonCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Header />

        <Hero />

        <section className="px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-dark-bg">
        <p className="text-red-400 text-sm">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <Header />

      <Hero />

      <section className="px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-dark-card aspect-square mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-medium dark:text-white">
                  {product.name}
                </p>
                <p className="text-sm text-gray-400">
                  {product.price.toLocaleString()}원
                </p>
              </Link>
              <button
                onClick={() => addItem(product)}
                className="mt-2 w-full text-xs border border-black dark:border-white dark:text-white py-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
              >
                장바구니 담기
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
