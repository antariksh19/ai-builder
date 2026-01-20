export const Skeleton = () => (
  <div className="w-full max-w-4xl mx-auto space-y-8 p-8 animate-pulse">
    {/* Navbar Skeleton */}
    <div className="h-16 bg-gray-200 rounded-lg w-full mb-8" />
    
    {/* Hero Skeleton */}
    <div className="h-96 bg-gray-200 rounded-xl w-full flex flex-col items-center justify-center gap-4">
      <div className="h-8 bg-gray-300 w-1/3 rounded" />
      <div className="h-4 bg-gray-300 w-1/2 rounded" />
    </div>

    {/* Features Skeleton */}
    <div className="grid grid-cols-3 gap-6">
      <div className="h-64 bg-gray-200 rounded-xl" />
      <div className="h-64 bg-gray-200 rounded-xl" />
      <div className="h-64 bg-gray-200 rounded-xl" />
    </div>
  </div>
);