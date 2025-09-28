// app/_hooks/useHistory.ts
"use client";

import { useCallback, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getQueries } from "@/app/_services/mongoService";
import { useDebounce } from "@/app/_hooks/useDebounce";

const translations = {
  en: {
    searchLabel: "Search History",
    searchPlaceholder: "Search by query or template...",
  },
  id: {
    searchLabel: "Cari Riwayat",
    searchPlaceholder: "Cari berdasarkan kueri atau template...",
  },
};

interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface Query {
  _id: string;
  template: { name: string; desc: string; icon: string };
  email: string;
  query: string;
  content: string;
  createdAt: string;
}

export function useHistory() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { user } = useUser();
  const email = user?.emailAddresses.at(0)?.emailAddress;

  const debouncedSearch = useDebounce(search, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const fetchQueries = useCallback(
    async (page = 1, pageSize = 6, keyword = debouncedSearch) => {
      setLoading(true);
      try {
        const data = await getQueries(email || "", page, pageSize, keyword);
        if (data.ok) {
          setQueries(data?.data ?? []);
          setPagination(data?.pagination ?? null);
        }
      } finally {
        setLoading(false);
      }
    },
    [email, debouncedSearch]
  );

  useEffect(() => {
    fetchQueries(1, 6);
  }, [fetchQueries]);

  return {
    queries,
    pagination,
    loading,
    search,
    handleSearchChange,
    fetchQueries,
    translations,
  };
}
