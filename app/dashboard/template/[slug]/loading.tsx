"use client";

import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-fadeIn">
      {/* Spinner */}
      <div className="p-6 rounded-3xl bg-indigo-100 dark:bg-indigo-900/40 shadow-sm">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600 dark:text-indigo-400" />
      </div>

      {/* Text */}
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400 font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
