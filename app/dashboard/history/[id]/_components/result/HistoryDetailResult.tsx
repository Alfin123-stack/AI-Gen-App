"use client";

import ResultHeader from "./ResultHeader";
import ResultMarkdown from "./ResultMarkdown";

interface HistoryDetailResultProps {
  label: string;
  content: string;
  templateName: string;
  copied: boolean;
  onCopy: () => void;
}

export default function HistoryDetailResult({
  label,
  content,
  templateName,
  copied,
  onCopy,
}: HistoryDetailResultProps) {
  return (
    <div className="p-6 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
      <ResultHeader label={label} copied={copied} onCopy={onCopy} />
      <ResultMarkdown content={content} templateName={templateName} />
    </div>
  );
}
