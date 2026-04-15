import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderComplete from "./pages/OrderComplete";
import NotFound from "./pages/NotFound";
import Toast from "./components/Toast";
import useToastStore from "./store/toastStore";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { message, hideToast } = useToastStore();

  return (
    <BrowserRouter>
      <AnimatedRoutes />
      {message && <Toast message={message} onClose={hideToast} />}
    </BrowserRouter>
  );
}

export default App;
