import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SkeletonCard from "../components/SkeletonCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import useDebounce from "../hooks/useDebounce";

function Home() {
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("전체");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

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

  const filtered = products
    .filter((p) => activeCategory === "전체" || p.category === activeCategory)
    .filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );

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
        <p className="text-red-400 text-md">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <Header />

      <Hero />

      <section className="px-6 mb-4">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="상품 검색"
            className="w-full text-md bg-gray-50 dark:bg-dark-card dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 pr-10 outline-none focus:border-black dark:focus:border-white transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="검색어 초기화"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-md px-4 py-2 rounded-full border transition-colors duration-200
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
            <p className="text-gray-400 text-md">해당 상품이 없어요</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
