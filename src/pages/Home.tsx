import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SkeletonCard from "../components/SkeletonCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/PageTransition";
import HomeHero from "../components/home/HomeHero";
import ProductCard from "../components/product/ProductCard";
import ProductRow from "../components/product/ProductRow";
import HomeBanner from "../components/home/HomeBanner";
import useProducts from "../hooks/useProducts";
import useDebounce from "../hooks/useDebounce";

function Home() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("전체");
  const [sortOrder, setSortOrder] = useState("default");
  const debouncedSearch = useDebounce(search, 300);

  const slides = [
    {
      tag: "NEW COLLECTION",
      title: "Live Your Style",
      desc: "트렌디한 라이프스타일을 위한 컬렉션",
      video: {
        sm: "/images/hero-video-sm.mp4",
        md: "/images/hero-video-md.mp4",
        lg: "/images/hero-video-lg.mp4",
      },
    },
    {
      tag: "SPRING SALE",
      title: "Fresh Start",
      desc: "봄 시즌 특별 할인",
      img: {
        sm: "/images/hero-01-sm.avif",
        md: "/images/hero-01-md.avif",
        lg: "/images/hero-01-lg.avif",
      },
    },
    {
      tag: "LIMITED",
      title: "Only Today",
      desc: "오늘만 만나볼 수 있는 아이템",
      img: {
        sm: "/images/hero-02-sm.avif",
        md: "/images/hero-02-md.avif",
        lg: "/images/hero-02-lg.avif",
      },
    },
    {
      tag: "COMING",
      title: "New Arrival",
      desc: "곧 공개됩니다",
    },
  ];

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

  const filtered = useMemo(() => {
    let result = products
      .filter((p) => activeCategory === "전체" || p.category === activeCategory)
      .filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );

    if (sortOrder === "asc")
      result = [...result].sort((a, b) => a.price - b.price);
    if (sortOrder === "desc")
      result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [products, activeCategory, debouncedSearch, sortOrder]);

  if (loading)
    return (
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Header />

        <PageTransition>
          <section className="px-6 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        </PageTransition>

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
      <PageTransition>
        <HomeHero slides={slides} />

        <section className="px-6 py-2">
          <h2 className="sr-only">상품검색 및 카테고리 선택</h2>

          <div className="px-6 mb-4">
            <div className="relative">
              <label className="sr-only" htmlFor="search">
                검색어
              </label>
              <input
                id="search"
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
          </div>

          <div className="px-6 mb-6">
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
          </div>

          <div className="px-6 mb-6 flex justify-end">
            <label className="sr-only" htmlFor="sortOrder">
              정렬
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="text-sm border border-gray-200 dark:border-gray-700 dark:bg-dark-bg dark:text-white rounded-lg px-3 py-2 outline-none focus:border-black dark:focus:border-white transition-colors"
            >
              <option value="default">기본순</option>
              <option value="asc">가격 낮은순</option>
              <option value="desc">가격 높은순</option>
            </select>
          </div>

          <div className="px-6 pb-16 flex-1">
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
          </div>
        </section>

        <HomeBanner
          title="Quiet moments for everyday life"
          image="/images/banner-01.webp"
        />

        <section className="px-6 py-24">
          <h2 className="text-2xl md:text-3xl mb-6 font-light text-center tracking-wide">
            주목할 만한 상품
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {products.slice(0, 4).map((p) => (
                <ProductRow key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <HomeBanner
          title="당신의 공간에, 조용한 편안함을 더합니다"
          description="LIVN은 일상의 물건을 통해 공간의 분위기를 디자인합니다"
          image="/images/banner-02.webp"
          caption="Minimal living space / curated by LIVN"
        />
      </PageTransition>

      <Footer />
    </div>
  );
}

export default Home;
