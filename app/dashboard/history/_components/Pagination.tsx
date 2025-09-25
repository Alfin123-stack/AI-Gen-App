"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";

interface PaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
}

// 🔹 Dictionary multi-bahasa
const translations = {
  en: {
    prev: "Prev",
    next: "Next",
    pageInfo: (page: number, total: number) => `Page ${page} of ${total}`,
  },
  id: {
    prev: "Sebelumnya",
    next: "Berikutnya",
    pageInfo: (page: number, total: number) => `Halaman ${page} dari ${total}`,
  },
};

export default function Pagination({
  page,
  totalPages,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      {/* Tombol Prev */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1, pageSize)}
        className="px-5 py-2 rounded-xl border shadow-sm 
                   bg-white/95 dark:bg-gray-900/80 
                   text-sm font-medium 
                   hover:bg-muted 
                   disabled:opacity-50 disabled:cursor-not-allowed 
                   transition-colors">
        {t.prev}
      </button>

      {/* Info Halaman */}
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {t.pageInfo(page, totalPages)}
      </span>

      {/* Tombol Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1, pageSize)}
        className="px-5 py-2 rounded-xl border shadow-sm 
                   bg-white/95 dark:bg-gray-900/80 
                   text-sm font-medium 
                   hover:bg-muted 
                   disabled:opacity-50 disabled:cursor-not-allowed 
                   transition-colors">
        {t.next}
      </button>
    </div>
  );
}
