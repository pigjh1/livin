import { Link } from "react-router-dom";
import products from "../data/products.json";
import useCartStore from "../store/cartStore";

function Home() {
  const { addItem, getTotalCount } = useCartStore();

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
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

      {/* 히어로 */}
      <section className="px-6 py-16 text-center">
        <p className="text-xs tracking-widest text-gray-400 mb-2">
          NEW COLLECTION
        </p>
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Live Your Style
        </h2>
        <p className="text-gray-500 text-sm">
          트렌디한 라이프스타일을 위한 컬렉션
        </p>
      </section>

      {/* 상품 그리드 */}
      <section className="px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden rounded-xl bg-gray-50 aspect-square mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-400">
                  {product.price.toLocaleString()}원
                </p>
              </Link>
              <button
                onClick={() => addItem(product)}
                className="mt-2 w-full text-xs border border-black py-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
              >
                장바구니 담기
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
