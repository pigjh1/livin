import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkeletonCard from "../components/SkeletonCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

function Home() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("전체");
  const CATEGORIES = [
    "전체",
    "cushion",
    "vase",
    "candle",
    "storage",
    "tray",
    "pot",
    "mirror",
    "furniture",
    "flower",
    "coaster",
    "wall",
    "textile",
  ];

  const filtered =
    activeCategory === "전체"
      ? products
      : products.filter((p) => p.category === activeCategory);

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

      <section className="px-6 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-xs px-4 py-2 rounded-full border transition-colors duration-200
                ${
                  activeCategory === cat
                    ? "bg-secondary border-secondary text-black font-medium"
                    : "border-gray-200 dark:border-gray-700 text-gray-400 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 flex-1">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">해당 카테고리 상품이 없어요</p>
          </div>
        ) : (
          // 상품 그리드 부분 교체
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
