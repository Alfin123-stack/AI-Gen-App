// app/_hooks/useDashboard.ts
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import templates from "@/app/_utils/template";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { getTemplateText } from "@/lib/utils";

const translations = {
  en: {
    chooseTemplate: "Choose a Template",
    searchPlaceholder: "Search templates...",
    noResults: "No templates found",
    tryDifferent: "Try a different search term",
  },
  id: {
    chooseTemplate: "Pilih Template",
    searchPlaceholder: "Cari template...",
    noResults: "Template tidak ditemukan",
    tryDifferent: "Coba kata kunci pencarian yang berbeda",
  },
};

export function useDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // 🔎 Filtering logic
  const filteredTemplates = templates.filter((template) => {
    const searchTerm = search.toLowerCase();
    const nameEn = getTemplateText(template, "en", "name").toLowerCase();
    const nameId = getTemplateText(template, "id", "name").toLowerCase();
    const descEn = getTemplateText(template, "en", "desc").toLowerCase();
    const descId = getTemplateText(template, "id", "desc").toLowerCase();

    return (
      nameEn.includes(searchTerm) ||
      nameId.includes(searchTerm) ||
      descEn.includes(searchTerm) ||
      descId.includes(searchTerm)
    );
  });

  return {
    search,
    setSearch,
    loading,
    handleChange,
    filteredTemplates,
    language,
    translations,
  };
}
