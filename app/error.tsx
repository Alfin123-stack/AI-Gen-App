"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function RootError({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-fadeIn">
      {/* Icon */}
      <div className="p-6 rounded-3xl bg-red-100 dark:bg-red-900/40 shadow-sm">
        <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
        Oops! Something went wrong
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-md">
        We couldn’t load this page right now. Please try again, or come back
        later.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
          Try Again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 
                     text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 
                     dark:hover:bg-gray-800 transition-colors">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
