import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalCount,
  } = useCartStore();

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
        <span className="text-sm text-gray-400">{getTotalCount()}개</span>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-8">장바구니</h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-6">장바구니가 비어있어요</p>
            <Link
              to="/"
              className="text-sm border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-colors duration-200"
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
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{item.name}</p>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.price.toLocaleString()}원
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 border border-gray-200 rounded-lg text-sm hover:border-black transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 border border-gray-200 rounded-lg text-sm hover:border-black transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-black transition-colors text-lg self-start"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* 합계 */}
            <div className="border-t border-gray-100 pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">총 상품 수</span>
                <span className="text-sm">{getTotalCount()}개</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">총 금액</span>
                <span className="text-xl font-bold">
                  {getTotalPrice().toLocaleString()}원
                </span>
              </div>
            </div>

            {/* 버튼 */}
            <button className="w-full bg-black text-white py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors duration-200 mb-3">
              주문하기
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-gray-200 py-4 rounded-xl text-sm text-gray-400 hover:border-black hover:text-black transition-colors duration-200"
            >
              장바구니 비우기
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
