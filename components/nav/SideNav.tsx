"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileClock,
  WalletCards,
  Settings,
  Rocket,
} from "lucide-react";
import { useCredit } from "@/app/_contexts/CreditContext";
import SignUpModal from "../ui/SignUpModal";
import { useLanguage } from "@/app/_contexts/LanguageContext";

// 🔹 Dictionary untuk multi-bahasa
const translations = {
  en: {
    menu: {
      dashboard: "Dashboard",
      history: "History",
      billing: "Billing",
      settings: "Settings",
    },
    plan: {
      free: "Free",
      pro: "Pro",
      usage: "Word Usage",
      unlimited: "Unlimited Plan",
      manage: "Manage Subscription",
    },
  },
  id: {
    menu: {
      dashboard: "Dasbor",
      history: "Riwayat",
      billing: "Tagihan",
      settings: "Pengaturan",
    },
    plan: {
      free: "Gratis",
      pro: "Pro",
      usage: "Penggunaan Kata",
      unlimited: "Paket Tanpa Batas",
      manage: "Kelola Langganan",
    },
  },
};

export default function SideNav() {
  const pathname = usePathname();
  const { derived } = useCredit();
  const { used, max, percent, isOverLimit, isUnlimited } = derived;

  const { language } = useLanguage();
  const t = translations[language];

  const menu = [
    { name: t.menu.dashboard, icon: LayoutDashboard, path: "/dashboard" },
    { name: t.menu.history, icon: FileClock, path: "/dashboard/history" },
    { name: t.menu.billing, icon: WalletCards, path: "/dashboard/billing" },
    { name: t.menu.settings, icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <div className="flex flex-col justify-between h-screen w-full pt-20 md:pt-4 pb-8 md:pb-0">
      {/* Top Menu */}
      <ul className="space-y-4">
        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}>
                <item.icon
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-indigo-500"
                  }`}
                />
                <span className="truncate">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom Section */}
      <section>
        {/* Plan Badge */}
        <div className="mb-3 flex items-center gap-2">
          {isUnlimited && (
            <Rocket className="w-4 h-4 text-green-600 dark:text-green-400" />
          )}
          <span
            className={`px-2 py-1 text-xs font-medium rounded-md border 
              ${
                isUnlimited
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300/40"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border-gray-300/40"
              }`}>
            {isUnlimited ? t.plan.pro : t.plan.free}
          </span>
        </div>

        {/* Credit Tracker */}
        <div className="border rounded-xl p-4 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">
          <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            {t.plan.usage}
          </p>
          {isUnlimited ? (
            <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-1">
              <Rocket className="w-3 h-3" /> {t.plan.unlimited}
            </p>
          ) : (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {used.toLocaleString("en-US")} / {max.toLocaleString("en-US")}{" "}
              words
            </p>
          )}

          {/* Progress bar */}
          {isUnlimited ? (
            <div className="w-full h-2 bg-green-100 dark:bg-green-900 rounded-full overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse" />
            </div>
          ) : (
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  percent < 60
                    ? "bg-gradient-to-r from-green-400 to-green-500"
                    : percent < 90
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                    : "bg-gradient-to-r from-red-500 to-pink-500"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
          )}
        </div>

        {/* Action */}
        <div className="mt-4">
          {isUnlimited ? (
            <Link
              href="/dashboard/billing"
              className="w-full inline-flex justify-center items-center rounded-xl px-4 py-2 border shadow-sm font-medium
                         bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-muted transition-colors">
              {t.plan.manage}
            </Link>
          ) : (
            <SignUpModal isOverLimit={isOverLimit} />
          )}
        </div>
      </section>
    </div>
  );
}
