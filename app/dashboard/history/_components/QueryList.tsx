"use client";

import QueryCard from "./QueryCard";
import QuerySkeleton from "./QuerySkeleton";
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
    emptyTitle: "No queries yet",
    emptySubtitle: "Your generated queries will appear here",
  },
  id: {
    emptyTitle: "Belum ada kueri",
    emptySubtitle: "Kueri yang Anda buat akan muncul di sini",
  },
};

export default function QueryList({
  queries,
  loading,
}: {
  queries: Query[];
  loading: boolean;
}) {
  const { language } = useLanguage();
  const t = translations[language];

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <QuerySkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!queries.length) {
    return (
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-20 text-center text-gray-500 dark:text-gray-400">
        <p className="text-lg font-medium">{t.emptyTitle}</p>
        <p className="text-sm mt-1">{t.emptySubtitle}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {queries.map((q) => (
        <QueryCard key={q._id} query={q} />
      ))}
    </div>
  );
}
