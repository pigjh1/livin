import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import PageTransition from "../components/PageTransition";

function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <PageTransition>
          <div className="relative mb-6">
            <p className="text-[120px] font-black text-black/5 dark:text-white/10 leading-none select-none">
              404
            </p>
            <p className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-black dark:text-white">
              404
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            페이지를 찾을 수 없어요
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
            주소가 잘못 입력됐거나
            <br />
            삭제된 페이지일 수 있어요
          </p>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-xl text-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              홈으로 돌아가기
            </Link>

            <Button variant="outline" onClick={() => window.history.back()}>
              이전 페이지로 돌아가기
            </Button>
          </div>
        </PageTransition>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
