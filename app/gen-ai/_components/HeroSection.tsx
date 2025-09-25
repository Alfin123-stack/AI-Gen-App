"use client";

import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Translations } from "./GenAI";

interface HeroSectionProps {
  t: Translations;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="max-w-2xl text-center mb-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {t[language].title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">{t[language].subtitle}</p>
    </section>
  );
}
