"use client";

import { ModeToggle } from "../ui/modeToggle";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import TopNavLogo from "./top-nav/TopNavLogo";
import TopNavUserSection from "./top-nav/TopNavUserSection";
import TopNavLanguageSwitcher from "./top-nav/TopNavLanguageSwitcher";

const translations = {
  en: { signIn: "Sign In", dashboard: "Dashboard", free: "Free", pro: "Pro" },
  id: { signIn: "Masuk", dashboard: "Dasbor", free: "Gratis", pro: "Pro" },
};

export default function TopNav() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2">
        <TopNavLogo />
        <section className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <TopNavUserSection t={t} />
          <TopNavLanguageSwitcher />
          <ModeToggle />
        </section>
      </div>
    </nav>
  );
}
