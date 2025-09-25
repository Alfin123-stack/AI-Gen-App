import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"; // pastikan ini diimpor hanya sekali di root layout
import TopNav from "@/components/nav/TopNav";
import { CreditProvider } from "./_contexts/CreditContext";
import { LanguageProvider } from "./_contexts/LanguageContext";
import { ThemeProvider } from "@/components/ui/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // variasi bobot
});

export const metadata: Metadata = {
  title: "AI Content Generator | Supercharge Your Workflow",
  description:
    "Buat konten lebih cepat dengan AI . Hasilkan artikel, ide, dan materi kreatif hanya dalam hitungan detik dengan teknologi kecerdasan buatan terbaru.",
  keywords: [
    "AI Content Generator",
    "AI Blog Writer",
    "AI Tools",
    "Content Automation",
    "Creative AI",
  ],
  icons: {
    icon: "/chat.png", // default favicon (png)
    shortcut: "/chat.png", // shortcut icon
    apple: "/chat.png", // untuk iOS homescreen
  },
  authors: [{ name: "Your Company" }],
  openGraph: {
    title: "AI Content Generator | Supercharge Your Workflow",
    description:
      "Hasilkan artikel, ide, dan konten kreatif dalam hitungan detik. Coba gratis sekarang!",
    url: "https://yourdomain.com",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Content Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generator | Supercharge Your Workflow",
    description:
      "Hasilkan artikel, ide, dan konten kreatif dengan bantuan AI. Coba gratis sekarang!",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@your_twitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <CreditProvider>
        <LanguageProvider>
          <html lang="en">
            <body className={`${poppins.variable} font-sans antialiased`}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                <header className="w-full">
                  <TopNav />
                </header>
                {children}
              </ThemeProvider>
            </body>
          </html>
        </LanguageProvider>
      </CreditProvider>
    </ClerkProvider>
  );
}
