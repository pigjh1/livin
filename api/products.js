import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const filePath = join(process.cwd(), "src/data/products.json");
  const products = JSON.parse(readFileSync(filePath, "utf-8"));

  res.status(200).json(products);
}
