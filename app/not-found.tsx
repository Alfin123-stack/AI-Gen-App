"use client";

import { SearchX } from "lucide-react";
import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Icon */}
      <div className="p-6 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-sm">
        <SearchX className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
        Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, we couldn’t find the page you were looking for. It might have
        been moved or deleted.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
          Go Back Home
        </Link>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 
                     text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 
                     dark:hover:bg-gray-800 transition-colors">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
