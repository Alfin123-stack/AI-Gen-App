"use client";

import SearchBox from "@/components/ui/SearchBox";
import TemplateCard from "./TemplateCard";
import TemplateSkeleton from "./TemplateSkeleton";
import TemplateEmptyState from "./TemplateEmptyState";
import { getTemplateText } from "@/app/_utils/template";
import { useDashboard } from "@/app/_hooks/useDashboard";

export default function PageContent() {
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
      {/* Search box */}
      <div className="text-center">
        <div className="w-full mx-auto">
          <SearchBox
            value={search}
            onChange={handleChange}
            label={t.chooseTemplate}
            placeholder={t.searchPlaceholder}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={
          loading
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : filteredTemplates.length === 0
            ? "flex items-center justify-center h-64"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }>
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <TemplateSkeleton />
            </div>
          ))
        ) : filteredTemplates.length > 0 ? (
          filteredTemplates.map((t, i) => (
            <div key={i} className="transition-transform hover:scale-[1.02]">
              <TemplateCard
                slug={t.slug}
                icon={t.icon}
                name={getTemplateText(t, language, "name")}
                desc={getTemplateText(t, language, "desc")}
              />
            </div>
          ))
        ) : (
          <TemplateEmptyState />
        )}
      </div>
    </div>
  );
}
