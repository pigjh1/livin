function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="rounded-xl bg-gray-100 aspect-square mb-3" />
      <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-100 rounded w-1/2 mb-2" />
      <div className="h-8 bg-gray-100 rounded mt-2" />
    </div>
  );
}

export default SkeletonCard;
