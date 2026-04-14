import { Link } from "react-router-dom";
import { ShoppingCart, Sun, Moon, ArrowLeft } from "lucide-react";
import useCartStore from "../store/cartStore";
import useDarkMode from "../hooks/useDarkMode";

function Header({ back }) {
  const { getTotalCount } = useCartStore();
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header
      className="
        sticky top-0 z-50
        flex items-center justify-between
        px-6 py-5
        backdrop-blur-lg
        bg-white/70
        dark:bg-dark-bg/70
        border-b border-black/5 dark:border-white/10
        shadow-sm
      "
    >
      {/* LEFT */}
      {back ? (
        <Link
          to="/"
          className="
            text-md
            text-gray-400
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
          aria-label="뒤로"
        >
          <ArrowLeft size={24} />
        </Link>
      ) : (
        <span />
      )}

      {/* LOGO */}
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 block">
        <img
          src="/logo.svg"
          className="h-5 w-auto dark:invert dark:brightness-200"
          alt="LIVN"
        />
      </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="
            text-xl
            text-gray-800
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
          aria-label="모드 변경"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <Link to="/cart" className="relative">
          <span className="sr-only">
            장바구니, 담긴 상품 {getTotalCount()}개
          </span>

          <ShoppingCart size={24} />

          {getTotalCount() > 0 && (
            <span
              className="
                absolute -top-2 -right-2
                bg-black
                dark:bg-white
                dark:text-black
                text-white
                text-xs
                rounded-full
                w-5 h-5
                flex items-center justify-center
                font-semibold
              "
              aria-hidden="true"
            >
              {getTotalCount()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
