import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useToastStore from "../store/toastStore";

function ProductCard({ product }) {
  const { addItem, items } = useCartStore();
  const { showToast } = useToastStore();

  const isInCart = items.some((item) => item.id === product.id);

  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-dark-card aspect-square mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-lg mb-3 font-blod dark:text-white mb-2">
          {product.name}
        </p>
        <p className="text-md text-gray-400">
          {product.price.toLocaleString()}원
        </p>
      </Link>
      <button
        onClick={() => {
          if (isInCart) return;
          addItem(product);
          showToast(`${product.name} 장바구니에 담겼어요 🛒`);
        }}
        className={`mt-2 w-full text-md py-2 rounded-lg border transition-colors duration-200
          ${
            isInCart
              ? "border-secondary bg-secondary text-black font-medium cursor-default"
              : "border-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          }`}
      >
        {isInCart ? "✓ 이미 담겼어요" : "장바구니 담기"}
      </button>
    </div>
  );
}

export default ProductCard;
