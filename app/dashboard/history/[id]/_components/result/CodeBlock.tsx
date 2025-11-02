"use client";

import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function CodeBlock({
  language,
  value,
}: {
  language: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2 py-1 rounded-md 
        bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 
        text-gray-700 dark:text-gray-300 flex items-center gap-1">
        {copied ? (
          <>
            <Check className="w-3 h-3 text-green-500" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" /> Copy
          </>
        )}
      </button>

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        PreTag="div"
        customStyle={{
          margin: 0,
          background: "none",
          fontSize: "0.9rem",
          padding: "1.25rem 1rem",
          lineHeight: "1.5",
        }}
        codeTagProps={{
          style: { background: "none", color: "inherit" },
        }}>
        {value.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
