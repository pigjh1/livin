import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Cart() {
  const navigate = useNavigate();
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalCount,
  } = useCartStore();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <Header back />

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-8 dark:text-white">장바구니</h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-6">장바구니가 비어있어요</p>
            <Link
              to="/"
              className="text-sm border border-black dark:border-white dark:text-white px-6 py-3 rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
            >
              쇼핑 계속하기
            </Link>
          </div>
        ) : (
          <>
            {/* 상품 목록 */}
            <div className="space-y-6 mb-10">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 dark:bg-dark-card flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.price.toLocaleString()}원
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-gray-200 dark:border-gray-700 dark:text-white rounded-lg text-sm hover:border-black dark:hover:border-white transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-gray-200 dark:border-gray-700 dark:text-white rounded-lg text-sm hover:border-black dark:hover:border-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-black dark:hover:text-white transition-colors text-lg self-start"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* 합계 */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">총 상품 수</span>
                <span className="text-sm dark:text-white">
                  {getTotalCount()}개
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium dark:text-white">총 금액</span>
                <span className="text-xl font-bold dark:text-white">
                  {getTotalPrice().toLocaleString()}원
                </span>
              </div>
            </div>

            {/* 버튼 */}
            <button
              onClick={() => navigate("/order-complete")}
              className="w-full bg-black dark:bg-white dark:text-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 mb-3"
            >
              주문하기
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-gray-200 dark:border-gray-700 py-4 rounded-xl text-sm text-gray-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors duration-200"
            >
              장바구니 비우기
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
