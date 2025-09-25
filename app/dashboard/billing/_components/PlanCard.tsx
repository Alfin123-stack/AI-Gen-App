"use client";

import { CheckCircle2, LucideRocket } from "lucide-react";

interface PlanCardProps {
  title: string;
  desc: string;
  features: string[];
  isActive: boolean;
  isPro?: boolean;
  t: {
    currentPlan: string;
    upgrade: string;
    notActive: string;
  };
  onManage?: () => void;
}

export default function PlanCard({
  title,
  desc,
  features,
  isActive,
  isPro = false,
  t,
  onManage,
}: PlanCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border shadow-sm backdrop-blur-sm flex flex-col justify-between 
        ${
          isPro
            ? isActive
              ? "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/20 border-indigo-300"
              : "bg-white/95 dark:bg-gray-900/80"
            : isActive
            ? "opacity-60"
            : "bg-white/95 dark:bg-gray-900/80"
        }`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{desc}</p>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> {f}
          </li>
        ))}
      </ul>
      {isPro ? (
        isActive ? (
          <button
            onClick={onManage}
            className="px-5 py-2 rounded-xl border shadow-sm bg-gray-100 text-gray-800 dark:text-gray-600">
            {t.currentPlan}
          </button>
        ) : (
          <button
            onClick={() => (window.location.href = "/membership")}
            className="px-5 py-2 rounded-xl border shadow-sm bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 justify-center">
            <LucideRocket />
            {t.upgrade}
          </button>
        )
      ) : (
        <button
          disabled
          className="px-5 py-2 rounded-xl border shadow-sm bg-gray-100 text-gray-600">
          {isActive ? t.notActive : t.currentPlan}
        </button>
      )}
    </div>
  );
}
