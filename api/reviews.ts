import { readFileSync } from "fs";
import { join } from "path";
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const filePath = join(process.cwd(), "src/data/reviews.json");
  const reviews: Review[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const { productId } = req.query;

  if (productId) {
    const filtered = reviews.filter((r) => r.productId === Number(productId));
    return res.status(200).json(filtered);
  }

  res.status(200).json(reviews);
}
