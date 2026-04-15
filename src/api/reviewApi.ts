const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
import type { Review } from "../types/product";

export const getReviewsByProductId = async (
  productId: string,
): Promise<Review[]> => {
  const res = await fetch(`${BASE_URL}/reviews?productId=${productId}`);
  if (!res.ok) throw new Error("리뷰를 불러오지 못했어요");
  return res.json();
};
