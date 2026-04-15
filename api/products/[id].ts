import { readFileSync } from "fs";
import { join } from "path";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { Product } from "../../src/types/product";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const filePath = join(process.cwd(), "src/data/products.json");
  const products: Product[] = JSON.parse(readFileSync(filePath, "utf-8"));
  const { id } = req.query;

  const product = products.find((p) => p.id === Number(id));
  if (!product) return res.status(404).json({ error: "상품을 찾을 수 없어요" });
  return res.status(200).json(product);
}
