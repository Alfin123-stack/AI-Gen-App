"use client";

import { Translations } from "../SideNav";
import CreditUsageInfo from "./CreditUsageInfo";
import CreditProgressBar from "./CreditProgressBar";

export default function SideNavCreditTracker({
  t,
  used,
  max,
  percent,
  isUnlimited,
}: {
  t: Translations;
  used: number;
  max: number;
  percent: number;
  isUnlimited: boolean;
}) {
  return (
    <div className="border rounded-xl p-4 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
      <CreditUsageInfo t={t} used={used} max={max} isUnlimited={isUnlimited} />
      <CreditProgressBar percent={percent} isUnlimited={isUnlimited} />
    </div>
  );
}
