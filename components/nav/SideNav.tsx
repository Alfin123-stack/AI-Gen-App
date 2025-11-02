"use client";

import React from "react";
import { useCredit } from "@/app/_contexts/CreditContext";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import SideNavMenu from "./side-nav/SideNavMenu";
import SideNavPlanBadge from "./side-nav/SideNavPlanBadge";
import SideNavCreditTracker from "./side-nav/SideNavCreditTracker";
import SideNavAction from "./side-nav/SideNavAction";

/* ---------- Translations ---------- */
export const translations = {
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
} as const;

/* ---------- Types ---------- */
type TranslationSection<T> = Record<keyof T, string>;

export type Translations = {
  menu: TranslationSection<(typeof translations)["en"]["menu"]>;
  plan: TranslationSection<(typeof translations)["en"]["plan"]>;
};

/* ---------- Component ---------- */
export default function SideNav() {
  const { derived } = useCredit();
  const { used, max, percent, isOverLimit, isUnlimited } = derived;

  const { language } = useLanguage();
  const t: Translations = translations[language] ?? translations.en;

  return (
    <div className="flex flex-col justify-between h-screen w-full pt-20 md:pt-4 pb-8 md:pb-0">
      {/* Top Menu */}
      <SideNavMenu t={t} />

      {/* Bottom Section */}
      <section>
        <SideNavPlanBadge t={t} isUnlimited={isUnlimited} />
        <SideNavCreditTracker
          t={t}
          used={used}
          max={max}
          percent={percent}
          isUnlimited={isUnlimited}
        />
        <SideNavAction
          t={t}
          isUnlimited={isUnlimited}
          isOverLimit={isOverLimit}
        />
      </section>
    </div>
  );
}
