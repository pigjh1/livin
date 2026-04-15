import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import PageTransition from "../components/PageTransition";
import useCartStore from "../store/cartStore";

function Order() {
  const navigate = useNavigate();
  const { items, getTotalPrice, getTotalCount } = useCartStore();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    memo: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해주세요";
    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해주세요";
    else if (!/^[0-9]{10,11}$/.test(form.phone.replace(/-/g, "")))
      newErrors.phone = "올바른 연락처를 입력해주세요";
    if (!form.address.trim()) newErrors.address = "주소를 입력해주세요";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate("/order-complete");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex flex-col">
      <Header back />
      <PageTransition>
        <div className="max-w-2xl mx-auto w-full px-6 py-10 flex-1">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">주문서</h2>

          <div className="bg-gray-50 dark:bg-dark-card rounded-2xl p-5 mb-8">
            <p className="text-sm font-medium dark:text-white mb-3">
              주문 상품 {getTotalCount()}개
            </p>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="dark:text-white">
                    {(item.price * item.quantity).toLocaleString()}원
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3 flex justify-between">
              <span className="text-sm font-medium dark:text-white">
                총 금액
              </span>
              <span className="font-bold dark:text-white">
                {getTotalPrice().toLocaleString()}원
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <Input
              label="이름"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="홍길동"
              required
              error={errors.name}
            />
            <Input
              label="연락처"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="01012345678"
              required
              error={errors.phone}
            />

            <Input
              label="주소"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="서울시 강남구 테헤란로 123"
              required
              error={errors.address}
            />

            <Textarea
              label="배송 메모"
              name="memo"
              value={form.memo}
              onChange={handleChange}
              placeholder="배송 시 요청사항을 입력해주세요"
            />

          <Button type="submit" variant="primary" onClick={handleSubmit}>
            {getTotalPrice().toLocaleString()}원 결제하기
          </Button>
        </div>
        <Footer />
      </PageTransition>
    </div>
  );
}

export default Order;
