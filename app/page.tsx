"use client";

import Hero from "@/components/landing/Hero";
import { useLanguage } from "./_contexts/LanguageContext";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";

const translations = {
  en: {
    heroTitle: "Create Content Faster with AI",
    heroSubtitle:
      "Harness the power of Artificial Intelligence to generate blog posts, ideas, and creative content in seconds.",
    getStarted: "Get Started",
    tryFree: "Try for Free",
    whyChoose: "Why Choose Our AI App?",
    feature1Title: "Fast & Efficient",
    feature1Desc:
      "Generate high-quality content in seconds without spending hours brainstorming.",
    feature2Title: "Powered by AI",
    feature2Desc:
      "Built on the latest AI models to provide accurate, relevant, and creative results.",
    feature3Title: "Save Time",
    feature3Desc:
      "Focus on your big ideas while the AI takes care of the details.",
    ctaTitle: "Ready to Supercharge Your Workflow?",
    ctaSubtitle:
      "Try our AI generator for free or sign up today to unlock premium features.",
  },
  id: {
    heroTitle: "Buat Konten Lebih Cepat dengan AI",
    heroSubtitle:
      "Manfaatkan kekuatan Kecerdasan Buatan untuk membuat artikel, ide, dan konten kreatif dalam hitungan detik.",
    getStarted: "Mulai Sekarang",
    tryFree: "Coba Gratis",
    whyChoose: "Mengapa Memilih Aplikasi AI Kami?",
    feature1Title: "Cepat & Efisien",
    feature1Desc:
      "Hasilkan konten berkualitas tinggi dalam hitungan detik tanpa berjam-jam berpikir.",
    feature2Title: "Didukung AI",
    feature2Desc:
      "Dibangun dengan model AI terbaru untuk hasil yang akurat, relevan, dan kreatif.",
    feature3Title: "Hemat Waktu",
    feature3Desc:
      "Fokus pada ide besar Anda, biarkan AI yang mengurus detailnya.",
    ctaTitle: "Siap Tingkatkan Produktivitas Anda?",
    ctaSubtitle:
      "Coba generator AI kami secara gratis atau daftar sekarang untuk membuka fitur premium.",
  },
};
export default function LandingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="flex flex-col min-h-screen transition-colors duration-300">
      <Hero t={t} />
      <Features t={t} />
      <CTA t={t} />
    </main>
  );
}
