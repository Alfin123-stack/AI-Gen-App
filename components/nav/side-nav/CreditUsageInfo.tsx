"use client";

import { Rocket } from "lucide-react";
import { Translations } from "../SideNav";

interface CreditUsageInfoProps {
  t: Translations;
  used: number;
  max: number;
  isUnlimited: boolean;
}

export default function CreditUsageInfo({
  t,
  used,
  max,
  isUnlimited,
}: CreditUsageInfoProps) {
  return (
    <>
      <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
        {t.plan.usage}
      </p>

      {isUnlimited ? (
        <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-1">
          <Rocket className="w-3 h-3" /> {t.plan.unlimited}
        </p>
      ) : (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          {used.toLocaleString("en-US")} / {max.toLocaleString("en-US")} words
        </p>
      )}
    </>
  );
}
