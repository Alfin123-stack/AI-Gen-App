"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideRocket, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanActionButtonProps } from "@/lib/types";

export default function PlanActionButton({
  variant,
  label,
  href,
  onClick,
  isLoading,
  className,
}: PlanActionButtonProps) {
  const buttonClasses = cn(
    "px-5 py-2 rounded-xl border shadow-sm font-medium transition-colors flex items-center justify-center gap-2",
    {
      "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700":
        variant === "manage",

      "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90":
        variant === "upgrade",

      "bg-gray-100 text-gray-800 dark:text-gray-600": variant === "current",

      "bg-gray-100 text-gray-500 cursor-not-allowed opacity-70":
        variant === "disabled",
    },
    className
  );

  const icon = isLoading ? (
    <Loader2 className="w-4 h-4 animate-spin" />
  ) : variant === "upgrade" ? (
    <LucideRocket className="w-4 h-4" />
  ) : null;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cn(buttonClasses)}>
        {icon}
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Button
      onClick={onClick}
      disabled={variant === "disabled" || isLoading}
      className={buttonClasses}>
      {icon}
      <span>{label}</span>
    </Button>
  );
}
