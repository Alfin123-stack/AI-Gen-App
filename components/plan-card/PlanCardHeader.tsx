"use client";

import { ReactNode } from "react";

interface PlanCardHeaderProps {
  icon: ReactNode;
  title: string;
}

export default function PlanCardHeader({ icon, title }: PlanCardHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h2>
    </div>
  );
}
