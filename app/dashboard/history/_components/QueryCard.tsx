"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/_contexts/LanguageContext";

interface Query {
  _id: string;
  template: { name: string; desc: string; icon: string };
  email: string;
  query: string;
  content: string;
  createdAt: string;
}

// 🔹 Dictionary multi-bahasa
const translations = {
  en: {
    viewDetail: "View details →",
  },
  id: {
    viewDetail: "Lihat detail →",
  },
};

export default function QueryCard({ query }: { query: Query }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="p-6 rounded-2xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 transition-colors hover:border-primary/50 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 w-fit">
          <Image
            src={query.template.icon}
            alt={query.template.name}
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">
            {query.template.name}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(query.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Query preview */}
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
        {query.query}
      </p>

      {/* Footer link */}
      <Link
        href={`/dashboard/history/${query._id}`}
        className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
        {t.viewDetail}
      </Link>
    </div>
  );
}
