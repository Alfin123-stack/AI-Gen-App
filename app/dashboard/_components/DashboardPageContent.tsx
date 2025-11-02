"use client";

import { useDashboard } from "@/app/_hooks/useDashboard";
import DashboardSectionTemplates from "./DashboardSectionTemplates";
import DashboardSectionSearch from "./DashboardSectionSearch";

export default function DashboardPageContent() {
  const {
    search,
    handleChange,
    loading,
    filteredTemplates,
    language,
    translations,
  } = useDashboard();

  const t = translations[language];

  return (
    <div className="space-y-8">
      <DashboardSectionSearch
        search={search}
        handleChange={handleChange}
        t={t}
      />

      <DashboardSectionTemplates
        loading={loading}
        filteredTemplates={filteredTemplates}
        language={language}
      />
    </div>
  );
}
