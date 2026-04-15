import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/productApi";

function useProduct(id: string) {
  const {
    data: product,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  return {
    product,
    loading,
    error: error ? (error as Error).message : null,
  };
}

export default useProduct;
