import type { Metadata } from "next";
import TryAI from "./_components/TryAI";

// ✅ Metadata untuk SEO & share
export const metadata: Metadata = {
  title: "Free AI Playground | Gemini 2.5 Flash",
  description:
    "Coba AI generatif gratis powered by Gemini 2.5 Flash. Hasilkan teks instan tanpa akun.",
  openGraph: {
    title: "Free AI Playground | Gemini 2.5 Flash",
    description:
      "Eksperimen dengan AI tanpa batasan. Gratis, cepat, dan mudah digunakan.",
    url: "https://yourdomain.com/gen-ai",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-genai.png",
        width: 1200,
        height: 630,
        alt: "Free AI Playground",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Playground | Gemini 2.5 Flash",
    description:
      "Coba gratis AI generatif untuk bikin teks instan, tanpa perlu daftar.",
    images: ["https://yourdomain.com/og-genai.png"],
  },
  alternates: {
    canonical: "https://yourdomain.com/gen-ai",
    languages: {
      "en-US": "https://yourdomain.com/en/gen-ai",
      "id-ID": "https://yourdomain.com/id/gen-ai",
    },
  },
};

export default function Page() {
  return <TryAI />;
}
