import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const slide = slides[current];

  const hasVideo = slide?.video;
  const hasImage = slide?.img;

  useEffect(() => {
    if (isHover) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHover]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] mb-16 md:mb-24 overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {hasVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            >
              <source src={slide.video.sm} media="(max-width:640px)" />
              <source src={slide.video.md} media="(max-width:1024px)" />
              <source src={slide.video.lg} />
            </video>
          )}

          {!hasVideo && hasImage && (
            <img
              src={slide.img.lg}
              srcSet={`
                ${slide.img.sm} 640w,
                ${slide.img.md} 1024w,
                ${slide.img.lg} 1600w
              `}
              sizes="
                (max-width:640px) 100vw,
                (max-width:1024px) 100vw,
                1600px
              "
              alt={slide.title}
              loading="eager"
              fetchPriority="high"
              onError={(e) => {
                e.target.src = "/images/fallback.jpg";
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {!hasVideo && !hasImage && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
              <div className="text-white text-center"></div>
            </div>
          )}

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
            <motion.p
              className="text-xs tracking-widest mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slide.tag}
            </motion.p>

            <motion.h2
              className="text-3xl md:text-7xl font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.title}
            </motion.h2>

            <motion.p
              className="text-md md:text-xl text-gray-200"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slide.desc}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl opacity-70 hover:opacity-100"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl opacity-70 hover:opacity-100"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => {
          const active = i === current;

          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`slide ${i + 1}`}
              className={`
                transition-all duration-300
                h-2
                ${active ? "w-8 rounded-full bg-white" : "w-2 rounded-full bg-white"}
              `}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
