import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const filePath = join(process.cwd(), "src/data/products.json");
  const products = JSON.parse(readFileSync(filePath, "utf-8"));
  const { id } = req.query;

  if (id) {
    const product = products.find((p) => p.id === Number(id));
    if (!product)
      return res.status(404).json({ error: "상품을 찾을 수 없어요" });
    return res.status(200).json(product);
  }

  res.status(200).json(products);
}
