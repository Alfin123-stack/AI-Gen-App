"use client";

import { SearchX } from "lucide-react";
import { useLanguage } from "@/app/_contexts/LanguageContext";

// 🔹 Dictionary teks multi-bahasa
const translations = {
  en: {
    title: "No templates found",
    subtitle: "Try adjusting your search or explore other categories",
  },
  id: {
    title: "Template tidak ditemukan",
    subtitle: "Coba ubah pencarian Anda atau jelajahi kategori lainnya",
  },
};

export default function TemplateEmptyState() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Icon */}
      <div className="p-6 rounded-full bg-gray-100 dark:bg-gray-800/60 mb-4">
        <SearchX className="w-12 h-12 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200">
        {t.title}
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
        {t.subtitle}
      </p>
    </div>
  );
}
