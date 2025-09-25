export default function QuerySkeleton() {
  return (
    <div
      className="p-6 rounded-2xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 animate-pulse space-y-4">
      {/* Title placeholder */}
      <div className="h-5 w-1/3 bg-gray-300 dark:bg-gray-700 rounded" />

      {/* Text lines */}
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />

      {/* Button placeholder */}
      <div className="h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded-lg mt-4" />
    </div>
  );
}
