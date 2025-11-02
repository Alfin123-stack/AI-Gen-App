"use client";
import { useHistoryDetail } from "@/app/_hooks/useHistoryDetail";
import { notFound } from "next/navigation";
import HistoryDetailSkeleton from "./HistoryDetailSkeleton";
import HistoryDetailHeader from "./HistoryDetailHeader";
import HistoryDetailQuery from "./HistoryDetailQuery";
import HistoryDetailResult from "./result/HistoryDetailResult";


export default function HistoryDetail({ id }: { id: string }) {
  const { query, loading, copied, handleCopy, t } = useHistoryDetail(id);

  if (loading) return <HistoryDetailSkeleton />;
  if (!query) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <HistoryDetailHeader
        template={query.template}
        createdAt={query.createdAt}
        backLabel={t.back}
      />
      <HistoryDetailQuery label={t.query} query={query.query} />
      <HistoryDetailResult
        label={t.result}
        content={query.content}
        templateName={query.template.name}
        copied={copied}
        onCopy={handleCopy}
      />
    </div>
  );
}
