const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("상품 목록을 불러오지 못했어요");
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("상품을 찾을 수 없어요");
  return res.json();
};
