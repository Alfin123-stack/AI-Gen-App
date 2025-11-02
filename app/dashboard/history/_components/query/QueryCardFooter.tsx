"use client";

import Link from "next/link";
import { useLanguage } from "@/app/_contexts/LanguageContext";

const translations = {
  en: { viewDetail: "View details →" },
  id: { viewDetail: "Lihat detail →" },
};

interface QueryCardFooterProps {
  queryId: string;
}

export default function QueryCardFooter({ queryId }: QueryCardFooterProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Link
      href={`/dashboard/history/${queryId}`}
      className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
      {t.viewDetail}
    </Link>
  );
}
