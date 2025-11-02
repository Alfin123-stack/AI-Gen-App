// app/dashboard/history/HistoryClient.tsx
"use client";

import QueryList from "./query/HistoryQueryList";
import SearchBox from "@/components/ui/SearchBox";
import { useHistory } from "@/app/_hooks/useHistory";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import HistoryPagination from "./pagination/HistoryPagination";

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

      <QueryList queries={queries} loading={loading} />

      {pagination && pagination.totalPages > 1 && !loading && (
        <HistoryPagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          pageSize={pagination.pageSize}
          onPageChange={fetchQueries}
        />
      )}
    </div>
  );
}
