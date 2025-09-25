"use client";

import { CreditCard, RocketIcon } from "lucide-react";

interface CurrentPlanProps {
  subscribing: boolean;
  t: {
    proPlan: string;
    freePlan: string;
    proCurrent: string;
    freeCurrent: string;
    manage: string;
    upgrade: string;
  };
  onManage: () => void;
}

export default function CurrentPlan({ subscribing, t, onManage }: CurrentPlanProps) {
  return (
    <div
      className="p-6 rounded-2xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
          <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {subscribing ? t.proPlan : t.freePlan}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {subscribing ? t.proCurrent : t.freeCurrent}
          </p>
        </div>
      </div>
      {subscribing ? (
        <button
          onClick={onManage}
          className="px-5 py-2 rounded-xl border shadow-sm 
                     bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          {t.manage}
        </button>
      ) : (
        <button
          onClick={() => (window.location.href = "/membership")}
          className="px-5 py-2 rounded-xl border shadow-sm 
                     bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium 
                     hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <RocketIcon />
          {t.upgrade}
        </button>
      )}
    </div>
  );
}
