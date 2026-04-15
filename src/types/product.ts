export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetail {
  html?: string;
  specs?: ProductSpec[];
  images?: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  detail?: ProductDetail;
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}
