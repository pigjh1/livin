import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-8xl font-bold text-black mb-4">404</p>
        <h2 className="text-xl font-bold mb-2 dark:text-white">
          페이지를 찾을 수 없어요
        </h2>
        <p className="text-gray-400 text-md mb-10">
          주소가 잘못됐거나 존재하지 않는 페이지예요
        </p>
        <Link
          to="/"
          className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-xl text-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
        >
          홈으로 돌아가기
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
