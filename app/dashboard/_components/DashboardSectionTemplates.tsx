
import { Language } from "@/app/_contexts/LanguageContext";
import DashboardTemplateSkeleton from "./DashboardTemplateSkeleton";
import DashboardTemplateCard from "./DashboardTemplateCard";
import DashboardTemplateEmptyState from "./DashboardTemplateEmptyState";
import { Template } from "@/lib/types";
import { getTemplateText } from "@/lib/utils";

interface SectionTemplatesProps {
  loading: boolean;
  filteredTemplates: Template[];
  language: Language;
}

export default function DashboardSectionTemplates({
  loading,
  filteredTemplates,
  language,
}: SectionTemplatesProps) {
  const gridClass =
    loading || filteredTemplates.length > 0
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : "flex items-center justify-center h-64";

  return (
    <div className={gridClass}>
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <DashboardTemplateSkeleton />
          </div>
        ))
      ) : filteredTemplates.length > 0 ? (
        filteredTemplates.map((t, i) => (
          <div key={i} className="transition-transform hover:scale-[1.02]">
            <DashboardTemplateCard
              slug={t.slug}
              icon={t.icon}
              name={getTemplateText(t, language, "name")}
              desc={getTemplateText(t, language, "desc")}
            />
          </div>
        ))
      ) : (
        <DashboardTemplateEmptyState />
      )}
    </div>
  );
}
