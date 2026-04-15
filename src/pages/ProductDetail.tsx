import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import Button from "../components/ui/Button";
import useCartStore from "../store/cartStore";
import useToastStore from "../store/toastStore";
import { getProductById } from "../api/productApi";
import reviews from "../data/reviews.json";

function ProductDetail() {
  const TABS = ["상세정보", "구매평", "Q&A"];
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("상세정보");
  const { addItem, items } = useCartStore();
  const { showToast } = useToastStore();

  const isInCart = items.some((item) => item.id === product?.id);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const productReviews = reviews.filter((r) => r.productId === Number(id));

  if (loading)
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Header back />
        <div className="max-w-2xl mx-auto px-6 py-10 animate-pulse">
          <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-square mb-8" />
          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4 mb-3" />
          <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded w-3/4 mb-3" />
          <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-1/4 mb-6" />
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
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header back />

      <PageTransition>
        <div className="max-w-2xl mx-auto w-full px-6 py-10 flex-1">
          <div className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-dark-card aspect-square mb-8">
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
          <p className="text-xl font-medium mb-6 dark:text-white">
            {product.price.toLocaleString()}원
          </p>

          <Button
            variant={isInCart ? "secondary" : "outline"}
            onClick={() => {
              if (isInCart) return;
              addItem(product);
              showToast(`${product.name} 장바구니에 담겼어요 🛒`);
            }}
          >
            {isInCart ? "✓ 이미 장바구니에 있어요" : "장바구니 담기"}
          </Button>

          <div className="border-b border-gray-100 dark:border-gray-800 mt-6 mb-6">
            <div className="flex gap-6">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm transition-colors duration-200 relative
                  ${
                    activeTab === tab
                      ? "text-black dark:text-white font-medium"
                      : "text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {tab}
                  {tab === "구매평" && (
                    <span className="ml-1 text-xs text-black font-medium">
                      {productReviews.length}
                    </span>
                  )}
                  {tab === "Q&A" && (
                    <span className="ml-1 text-xs text-gray-400">0</span>
                  )}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "상세정보" && (
            <div className="py-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
              <div className="mt-6 space-y-3 border-t border-gray-100 dark:border-gray-800 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">카테고리</span>
                  <span className="dark:text-white">{product.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">배송</span>
                  <span className="dark:text-white">3~5일 이내 출고</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">교환/반품</span>
                  <span className="dark:text-white">수령 후 7일 이내</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "구매평" && (
            <div className="py-4">
              {productReviews.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-10">
                  아직 구매평이 없어요
                </p>
              ) : (
                <div className="space-y-6">
                  {productReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 dark:border-gray-800 pb-6"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium dark:text-white">
                            {review.author}
                          </span>
                          <span className="text-black text-xs">
                            {"★".repeat(review.rating)}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "Q&A" && (
            <div className="py-4">
              <p className="text-center text-gray-400 text-sm py-10">
                아직 문의가 없어요
              </p>
            </div>
          )}
        </div>
      </PageTransition>

      <Footer />
    </div>
  );
}

export default ProductDetail;
