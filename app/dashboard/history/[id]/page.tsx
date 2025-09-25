// app/dashboard/history/[id]/page.tsx
import type { Metadata } from "next";
import HistoryDetail from "./_components/HistoryDetail";

export const metadata: Metadata = {
  title: "History Detail | AI Content Generator",
  description:
    "Lihat detail riwayat query Anda. Akses kembali pertanyaan, hasil AI, dan informasi template yang digunakan.",
  openGraph: {
    title: "History Detail | AI Content Generator",
    description:
      "Telusuri kembali detail riwayat query Anda. Kelola hasil, salin konten, dan gunakan ulang dengan mudah.",
    url: "https://yourdomain.com/dashboard/history", // bisa tambahin slug/id dinamis kalau mau pakai generateMetadata
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-history.png",
        width: 1200,
        height: 630,
        alt: "History Detail Preview",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "History Detail | AI Content Generator",
    description:
      "Akses detail riwayat query AI Anda. Mudah dikelola, disalin, dan digunakan kembali.",
    images: ["https://yourdomain.com/og-history.png"],
    creator: "@your_twitter",
  },
};

export default function QueryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <HistoryDetail id={params.id} />;
}
