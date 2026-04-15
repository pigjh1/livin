import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";

function useProducts() {
  const {
    data: products = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    products,
    loading,
    error: error ? (error as Error).message : null,
  };
}

export default useProducts;
