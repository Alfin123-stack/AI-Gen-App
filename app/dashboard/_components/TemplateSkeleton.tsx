"use client";

export default function TemplateSkeleton() {
  return (
    <div
      className="p-6 border rounded-2xl shadow-sm 
                 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md 
                 animate-pulse h-full flex flex-col justify-between">
      {/* Icon + Title skeleton */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="w-14 h-14 bg-gray-300/60 dark:bg-gray-700/60 rounded-lg" />
        <div className="w-32 h-5 bg-gray-300/60 dark:bg-gray-700/60 rounded" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-300/60 dark:bg-gray-700/60 rounded" />
        <div className="w-3/4 h-4 bg-gray-300/60 dark:bg-gray-700/60 rounded" />
      </div>
    </div>
  );
}
