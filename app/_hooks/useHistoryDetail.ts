"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { getQueryById, Query } from "@/app/_services/mongoService";
import { useLanguage } from "../_contexts/LanguageContext";

const translations = {
  en: {
    notFoundTitle: "History not found",
    notFoundDesc:
      "The requested history record does not exist or has been deleted.",
    back: "Back",
    backToHistory: "Back to History",
    query: "Query",
    result: "Result",
    copied: "Copied",
    copy: "Copy",
    loading: "Loading history...",
  },
  id: {
    notFoundTitle: "Riwayat tidak ditemukan",
    notFoundDesc: "Riwayat yang diminta tidak ada atau sudah dihapus.",
    back: "Kembali",
    backToHistory: "Kembali ke Riwayat",
    query: "Pertanyaan",
    result: "Hasil",
    copied: "Tersalin",
    copy: "Salin",
    loading: "Memuat riwayat...",
  },
};

export function useHistoryDetail(id: string) {
  const [query, setQuery] = useState<Query | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
   const { language } = useLanguage();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQueryById(id);
        setQuery(res.data ?? null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [id]);

  const handleCopy = useCallback(async () => {
    if (!query?.content) return;
    await navigator.clipboard.writeText(query.content);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }, [query]);

  const t = translations[language];
  return { query, loading, copied, handleCopy, translations,t };
}
