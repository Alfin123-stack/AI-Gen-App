"use client";

import { FileSearch } from "lucide-react";
import Link from "next/link";

export default function TemplateNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Icon */}
      <div className="p-6 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-sm">
        <FileSearch className="h-12 w-12 text-red-500 dark:text-red-400" />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
        Template Not Found
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-md">
        The template you’re looking for doesn’t exist or may have been removed.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/dashboard"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
          Browse Templates
        </Link>
        <Link
          href="/dashboard"
          className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 
                     text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-100 
                     dark:hover:bg-gray-800 transition-colors">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
