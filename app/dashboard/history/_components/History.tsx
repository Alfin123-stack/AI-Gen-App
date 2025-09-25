// app/dashboard/history/HistoryClient.tsx
"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import QueryList from "./QueryList";
import Pagination from "./Pagination";
import SearchBox from "@/components/ui/SearchBox";
import { useHistory } from "@/app/_hooks/useHistory";
import { useLanguage } from "@/app/_contexts/LanguageContext";

export default function History() {
  const {
    queries,
    pagination,
    loading,
    search,
    handleSearchChange,
    fetchQueries,
    translations,
  } = useHistory();

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <SearchBox
        value={search}
        onChange={handleSearchChange}
        label={t.searchLabel}
        placeholder={t.searchPlaceholder}
      />

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
          </div>
        }>
        <QueryList queries={queries} loading={loading} />
      </Suspense>

      {pagination && pagination.totalPages > 1 && !loading && (
        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          pageSize={pagination.pageSize}
          onPageChange={fetchQueries}
        />
      )}
    </div>
  );
}
