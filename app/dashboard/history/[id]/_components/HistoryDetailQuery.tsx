"use client";

import { MessageSquare } from "lucide-react";

export default function HistoryDetailQuery({ label, query }: { label: string; query: string }) {
  return (
    <div className="p-6 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="w-5 h-5 text-indigo-500" />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {label}
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {query}
      </p>
    </div>
  );
}
