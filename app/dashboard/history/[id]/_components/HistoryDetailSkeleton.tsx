"use client";

export default function HistoryDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between p-5 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          <div>
            <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
      {/* Query Skeleton */}
      <div className="p-6 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80 space-y-3">
        <div className="h-5 w-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      {/* Result Skeleton */}
      <div className="p-6 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
