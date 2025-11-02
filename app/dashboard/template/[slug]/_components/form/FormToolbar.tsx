"use client";

import Link from "next/link";
import { ArrowLeft, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/_contexts/LanguageContext";

interface FormHeaderProps {
  onCopy: () => void;
  disabled: boolean;
}

// 🔹 Dictionary multi-bahasa
const translations = {
  en: {
    back: "Back",
    copy: "Copy",
  },
  id: {
    back: "Kembali",
    copy: "Salin",
  },
};

export default function FormToolbar({ onCopy, disabled }: FormHeaderProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex justify-between items-center w-full mb-8">
      {/* Back Button */}
      <Link href="/dashboard">
        <Button
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 
                     rounded-lg border bg-white dark:bg-gray-800 
                     text-sm font-medium shadow-sm 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     transition-colors">
          <ArrowLeft className="size-4" />
          {t.back}
        </Button>
      </Link>

      {/* Copy Button */}
      <Button
        onClick={onCopy}
        disabled={disabled}
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 
                   rounded-lg border bg-white dark:bg-gray-800 
                   text-sm font-medium shadow-sm 
                   hover:bg-gray-100 dark:hover:bg-gray-700 
                   disabled:opacity-50 disabled:cursor-not-allowed 
                   transition-colors">
        <CopyIcon className="size-4" />
        {t.copy}
      </Button>
    </div>
  );
}
