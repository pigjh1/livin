import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/PageTransition";
import Button from "../components/ui/Button";
import useCartStore from "../store/cartStore";
import useToastStore from "../store/toastStore";
import useProduct from "../hooks/useProduct";
import useReviews from "../hooks/useReviews";

function ProductDetail() {
  const TABS = ["상세정보", "구매평", "Q&A"];
  const { id } = useParams();
  const { product, loading, error } = useProduct(id!);
  const [activeTab, setActiveTab] = useState("상세정보");
  const { addItem, items } = useCartStore();
  const { showToast } = useToastStore();

  const isInCart = items.some((item) => item.id === product?.id);
  const { reviews: productReviews } = useReviews(id!);

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
          <p className="text-xl font-medium mb-4 dark:text-white">
            {product.price.toLocaleString()}원
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
            {product.description}
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
            <div className="py-6 space-y-10">
              {product?.detail?.specs?.length > 0 && (
                <div className="pt-6 space-y-3">
                  <h3 className="text-ms font-semibold text-gray-900 dark:text-white mb-4">
                    상품 정보
                  </h3>
                  <div className="rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
                    {product.detail.specs.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between px-4 py-3 text-sm"
                      >
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product?.detail?.html?.length > 0 && (
                <div className="pt-6 space-y-3">
                  <h3 className="text-ms font-semibold text-gray-900 dark:text-white mb-4">
                    상품 설명
                  </h3>

                  <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.detail.html }}
                  />
                </div>
              )}

              <div className="pt-6 space-y-3">
                <h3 className="text-ms font-semibold text-gray-900 dark:text-white mb-4">
                  배송/교환 정보
                </h3>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">배송</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    3~5일 이내 출고
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">교환/반품</span>
                  <span className="text-gray-800 dark:text-white font-medium">
                    수령 후 7일 이내
                  </span>
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
                          <span className="text-ms font-medium dark:text-white">
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
                      <p className="text-ms text-gray-500 dark:text-gray-400 leading-relaxed">
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
