function SkeletonCard() {
  return (
    <div className="border rounded p-4 animate-pulse">
      <div className="h-5 bg-gray-300 mb-3"></div>
      <div className="h-4 bg-gray-300 mb-2"></div>
      <div className="h-4 bg-gray-300"></div>
    </div>
  );
}

export default SkeletonCard;