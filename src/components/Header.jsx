import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useDarkMode from "../hooks/useDarkMode";

function Header({ back }) {
  const { getTotalCount } = useCartStore();
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex justify-between items-center">
      {back ? (
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← 뒤로
        </Link>
      ) : (
        <span />
      )}
      <h1 className="text-xl font-bold tracking-widest">LIVIN</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-lg text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <Link to="/cart" className="relative">
          <span className="text-lg">🛒</span>
          {getTotalCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-black dark:bg-white dark:text-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {getTotalCount()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
