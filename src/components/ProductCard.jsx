import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
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
        <p className="text-md text-gray-400 mb-6">
          {product.price.toLocaleString()}원
        </p>
      </Link>

      <Button
        size="sm"
        variant={isInCart ? "secondary" : "outline"}
        onClick={() => {
          if (isInCart) return;
          addItem(product);
          showToast(`${product.name} 장바구니에 담겼어요 🛒`);
        }}
      >
        {isInCart ? "✓ 이미 장바구니에 있어요" : "장바구니 담기"}
      </Button>
    </div>
  );
}

export default ProductCard;
