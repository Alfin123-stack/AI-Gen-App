"use client";

import { Rocket } from "lucide-react";
import { Translations } from "../SideNav";

export default function SideNavPlanBadge({
  t,
  isUnlimited,
}: {
  t: Translations;
  isUnlimited: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      {isUnlimited && (
        <Rocket className="w-4 h-4 text-green-600 dark:text-green-400" />
      )}
      <span
        className={`px-2 py-1 text-xs font-medium rounded-md border ${
          isUnlimited
            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300/40"
            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border-gray-300/40"
        }`}>
        {isUnlimited ? t.plan.pro : t.plan.free}
      </span>
    </div>
  );
}
