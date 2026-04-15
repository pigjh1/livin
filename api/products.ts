import { readFileSync } from "fs";
import { join } from "path";
import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const filePath = join(process.cwd(), "src/data/products.json");
  const products: Product[] = JSON.parse(readFileSync(filePath, "utf-8"));

  res.status(200).json(products);
}
