"use client";
import { HistoryHeader, QueryBox, ResultBox, SkeletonLoader } from ".";
import { useHistoryDetail } from "@/app/_hooks/useHistoryDetail";
import { notFound } from "next/navigation";

export default function HistoryDetail({ id }: { id: string }) {
  const { query, loading, copied, handleCopy, t } = useHistoryDetail(id);

  if (loading) return <SkeletonLoader />;
  if (!query) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <HistoryHeader
        template={query.template}
        createdAt={query.createdAt}
        backLabel={t.back}
      />
      <QueryBox label={t.query} query={query.query} />
      <ResultBox
        label={t.result}
        content={query.content}
        templateName={query.template.name}
        copied={copied}
        onCopy={handleCopy}
      />
    </div>
  );
}
