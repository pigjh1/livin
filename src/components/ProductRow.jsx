import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductRow({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Link
        to={`/product/${product.id}`}
        className="
          group
          flex items-center gap-6
          py-6
          border-b border-black/5 dark:border-white/10
          transition-all duration-300
          hover:bg-gray-50 dark:hover:bg-white/5
        "
      >
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex-1 space-y-1">
          <p className="font-light text-base group-hover:tracking-wide transition-all">
            {product.name}
          </p>

          <p className="text-xs text-gray-400">{product.category}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-600">
            {product.price.toLocaleString()}₩
          </p>

          <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
            제품 상세 보기 →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductRow;
