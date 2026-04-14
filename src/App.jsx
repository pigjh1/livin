import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import OrderComplete from "./pages/OrderComplete";
import Toast from "./components/Toast";
import useToastStore from "./store/toastStore";
import NotFound from "./pages/NotFound";

function App() {
  const { message, hideToast } = useToastStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {message && <Toast message={message} onClose={hideToast} />}
    </BrowserRouter>
  );
}

export default App;
