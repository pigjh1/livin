import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import useCartStore from "../store/cartStore";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/PageTransition";

function OrderComplete() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header back />

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <PageTransition>
          <div className="text-center">
            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-check-pop">
              <Check
                className="text-white dark:text-black w-8 h-8 animate-check-fade"
                strokeWidth={3}
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              주문이 완료됐어요
            </h2>
            <p className="text-gray-400 text-md mb-10">
              주문해주셔서 감사합니다 🙂
            </p>
            <Link
              to="/"
              className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-xl text-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              쇼핑 계속하기
            </Link>
          </div>
        </PageTransition>
      </div>

      <Footer />
    </div>
  );
}

export default OrderComplete;
