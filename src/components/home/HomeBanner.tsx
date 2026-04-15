import { motion } from "framer-motion";

type HomeBannerProps = {
  title: string;
  description?: string;
  image: string;
  caption?: string;
};

export default function HomeBanner({
  title,
  description,
  image,
  caption,
}: HomeBannerProps) {
  return (
    <section className="px-6 py-28 text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-light tracking-wide"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-500 dark:text-gray-400 text-sm md:text-base"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-sm"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-72 md:h-96 object-cover hover:scale-[1.02] transition-transform duration-700"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs text-gray-400"
      >
        {caption}
      </motion.p>
    </section>
  );
}
