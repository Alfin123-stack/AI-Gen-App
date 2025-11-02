"use client";

import { Crown, XCircle } from "lucide-react";
import { Toaster } from "react-hot-toast";
import PlanCard from "@/components/plan-card/PlanCard"; // 👉 pakai versi kamu yang super lengkap
import { useLanguage } from "@/app/_contexts/LanguageContext";

const translations = {
  en: {
    headerTitle: "Choose Your Membership",
    headerSubtitle:
      "Select the plan that best fits your needs. You can upgrade or downgrade at any time.",
    freeTitle: "Free Membership",
    freeDesc: "Get started for free with limited access.",
    freeFeatures: [
      { text: "Access to basic AI tools", included: true },
      { text: "5,000 words per month", included: true },
      { text: "No priority support", included: false },
      { text: "Limited processing speed", included: false },
    ],
    freeBtn: "Current Plan",
    monthlyTitle: "Monthly Membership",
    monthlyDesc: "Unlock unlimited access and premium features.",
    monthlyFeatures: [
      { text: "Unlimited words every month", included: true },
      { text: "Access to all AI tools", included: true },
      { text: "Priority support", included: true },
      { text: "Faster processing", included: true },
    ],
    monthlyBtn: "$9.99 / month",
  },
  id: {
    headerTitle: "Pilih Keanggotaan Anda",
    headerSubtitle:
      "Pilih paket yang paling sesuai dengan kebutuhan Anda. Anda bisa upgrade atau downgrade kapan saja.",
    freeTitle: "Keanggotaan Gratis",
    freeDesc: "Mulai gratis dengan akses terbatas.",
    freeFeatures: [
      { text: "Akses ke alat AI dasar", included: true },
      { text: "5.000 kata per bulan", included: true },
      { text: "Tanpa dukungan prioritas", included: false },
      { text: "Kecepatan pemrosesan terbatas", included: false },
    ],
    freeBtn: "Paket Saat Ini",
    monthlyTitle: "Keanggotaan Bulanan",
    monthlyDesc: "Buka akses tanpa batas dan fitur premium.",
    monthlyFeatures: [
      { text: "Kata tanpa batas setiap bulan", included: true },
      { text: "Akses ke semua alat AI", included: true },
      { text: "Dukungan prioritas", included: true },
      { text: "Pemrosesan lebih cepat", included: true },
    ],
    monthlyBtn: "Rp 150.000 / bulan",
  },
};

export default function Membership() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <Toaster />

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-card-foreground">
          {t.headerTitle}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t.headerSubtitle}
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Free Plan */}
        <PlanCard
          title={t.freeTitle}
          description={t.freeDesc}
          icon={<XCircle className="w-8 h-8 text-muted-foreground" />}
          features={t.freeFeatures}
          isActive={true}
          disable
          text={t.freeBtn}
        />

        {/* Monthly Plan */}
        <PlanCard
          title={t.monthlyTitle}
          description={t.monthlyDesc}
          icon={<Crown className="w-8 h-8 text-yellow-500" />}
          features={t.monthlyFeatures}
          isPro
          highlighted
          text={t.monthlyBtn}
        />
      </div>
    </div>
  );
}
