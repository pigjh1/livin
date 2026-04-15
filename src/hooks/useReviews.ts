import { useQuery } from "@tanstack/react-query";
import { getReviewsByProductId } from "../api/reviewApi";

function useReviews(productId: string) {
  const {
    data: reviews = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getReviewsByProductId(productId),
  });

  return {
    reviews,
    loading,
    error: error ? (error as Error).message : null,
  };
}

export default useReviews;
