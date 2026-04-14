import products from "../src/data/products.json" assert { type: "json" };

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const product = products.find((p) => p.id === Number(id));
    if (!product)
      return res.status(404).json({ error: "상품을 찾을 수 없어요" });
    return res.status(200).json(product);
  }

  res.status(200).json(products);
}
