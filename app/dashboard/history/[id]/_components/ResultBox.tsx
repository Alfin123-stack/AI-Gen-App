"use client";

import { Bot, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ResultBox({
  label,
  content,
  templateName,
  copied,
  onCopy,
}: {
  label: string;
  content: string;
  templateName: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="p-6 rounded-2xl border shadow-sm bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {label}
          </h2>
        </div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border shadow-sm 
          bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
          text-gray-700 dark:text-gray-300 transition-colors">
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-500" /> Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy
            </>
          )}
        </button>
      </div>

      <div className="prose dark:prose-invert max-w-none leading-relaxed">
        {templateName === "Explain Code" ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
