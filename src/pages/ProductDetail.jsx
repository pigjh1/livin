import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import useCartStore from "../store/cartStore";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Header back />
        <div className="max-w-2xl mx-auto px-6 py-10 animate-pulse">
          <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-square mb-8" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4 mb-3" />
          <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded w-3/4 mb-3" />
          <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-1/4 mb-6" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-2/3" />
        </div>
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
      <Header back />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-square mb-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
          {product.category}
        </p>
        <h2 className="text-2xl font-bold mb-2 dark:text-white">
          {product.name}
        </h2>
        <p className="text-xl font-medium mb-4 dark:text-white">
          {product.price.toLocaleString()}원
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {product.description}
        </p>

        <button
          onClick={() => addItem(product)}
          className="w-full bg-black dark:bg-white dark:text-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
        >
          장바구니 담기
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
