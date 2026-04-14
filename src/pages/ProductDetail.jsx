import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/productApi";
import useCartStore from "../store/cartStore";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem, getTotalCount } = useCartStore();

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">불러오는 중...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-sm">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-black transition-colors"
        >
          ← 뒤로
        </Link>
        <h1 className="text-xl font-bold tracking-widest">LIVIN</h1>
        <Link to="/cart" className="relative">
          <span className="text-sm">🛒</span>
          {getTotalCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {getTotalCount()}
            </span>
          )}
        </Link>
      </header>

      {/* 상품 상세 */}
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
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-xl font-medium mb-4">
          {product.price.toLocaleString()}원
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {product.description}
        </p>

        <button
          onClick={() => addItem(product)}
          className="w-full bg-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
