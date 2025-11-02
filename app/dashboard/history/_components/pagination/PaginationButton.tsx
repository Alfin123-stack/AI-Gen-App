"use client";

import { Button } from "@/components/ui/button";

interface PaginationButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function PaginationButton({
  disabled,
  onClick,
  children,
}: PaginationButtonProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className="px-5 py-2 rounded-xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 
                 text-sm font-medium 
                 text-gray-700 dark:text-gray-200
                 hover:bg-gray-100 dark:hover:bg-gray-800 
                 disabled:opacity-50 disabled:cursor-not-allowed 
                 transition-colors">
      {children}
    </Button>
  );
}
