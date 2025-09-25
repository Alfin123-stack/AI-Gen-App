"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "../ui/modeToggle";
import { Button } from "@/components/ui/button";
import { useCredit } from "@/app/_contexts/CreditContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Globe } from "lucide-react";

const translations = {
  en: {
    signIn: "Sign In",
    dashboard: "Dashboard",
    free: "Free",
    pro: "Pro",
  },
  id: {
    signIn: "Masuk",
    dashboard: "Dasbor",
    free: "Gratis",
    pro: "Pro",
  },
};

export default function TopNav() {
  const { isSignedIn, user } = useUser();
  const { subscribing } = useCredit();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition whitespace-nowrap">
          AI<span className="text-gray-900 dark:text-white">Gen</span>
        </Link>

        {/* Right Section */}
        <section className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          {isSignedIn && (
            <div className="flex items-center gap-2 max-w-[120px] sm:max-w-[200px] truncate">
              <Link
                href="/dashboard"
                className="text-[11px] sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
                title={`${user.fullName || "User"}'s ${t.dashboard}`}>
                {`${user.fullName || "User"}'s ${t.dashboard}`}
              </Link>

              {subscribing ? (
                <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 font-medium whitespace-nowrap">
                  {t.pro}
                </span>
              ) : (
                <span className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 font-medium whitespace-nowrap">
                  {t.free}
                </span>
              )}
            </div>
          )}

          <SignedOut>
            <SignInButton>
              <Button className="text-xs sm:text-sm px-3 sm:px-5 py-1 sm:py-2">
                {t.signIn}
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* 🌐 Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("id")}>
                🇮🇩 Bahasa Indonesia
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </section>
      </div>
    </nav>
  );
}
