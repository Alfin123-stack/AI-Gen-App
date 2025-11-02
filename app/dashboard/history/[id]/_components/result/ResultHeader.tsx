"use client";

import { Button } from "@/components/ui/button";
import { Bot, Copy, Check } from "lucide-react";

interface ResultHeaderProps {
  label: string;
  copied: boolean;
  onCopy: () => void;
}

export default function ResultHeader({ label, copied, onCopy }: ResultHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <Bot className="w-5 h-5 text-purple-500" />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{label}</h2>
      </div>

      <Button
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
      </Button>
    </div>
  );
}
