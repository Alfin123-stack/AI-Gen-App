"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import PaginationButton from "./PaginationButton";

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

export default function HistoryPagination({
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
      <PaginationButton
        disabled={page === 1}
        onClick={() => onPageChange(page - 1, pageSize)}>
        {t.prev}
      </PaginationButton>

      {/* Info Halaman */}
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {t.pageInfo(page, totalPages)}
      </span>

      {/* Tombol Next */}
      <PaginationButton
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1, pageSize)}>
        {t.next}
      </PaginationButton>
    </div>
  );
}
