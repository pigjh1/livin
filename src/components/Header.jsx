import { Link } from "react-router-dom";
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
            text-sm
            text-gray-400
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          ← 뒤로
        </Link>
      ) : (
        <span />
      )}

      {/* LOGO */}
      <Link to="/" className="block">
        <img
          src="/logo.svg"
          alt="LIVIN"
          className="h-5 w-auto dark:invert dark:brightness-200"
        />
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* DARK MODE */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="
            text-xl
            text-gray-400
            hover:text-black
            dark:hover:text-white
            transition-colors
          "
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        {/* CART */}
        <Link to="/cart" className="relative">
          <span className="text-xl">🛒</span>

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
