"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCredit } from "@/app/_contexts/CreditContext";

type TopNavUserSectionProps = {
  t: { signIn: string; dashboard: string; free: string; pro: string };
};

export default function TopNavUserSection({ t }: TopNavUserSectionProps) {
  const { isSignedIn, user } = useUser();
  const { subscribing } = useCredit();

  return (
    <div className="flex items-center gap-2">
      {isSignedIn && (
        <div className="flex items-center gap-2 max-w-[120px] sm:max-w-[200px] truncate">
          <Link
            href="/dashboard"
            className="text-[11px] sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
            title={`${user.fullName || "User"}'s ${t.dashboard}`}>
            {`${user.fullName || "User"}'s ${t.dashboard}`}
          </Link>

          <span
            className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs rounded-full font-medium whitespace-nowrap ${
              subscribing
                ? "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400"
                : "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400"
            }`}>
            {subscribing ? t.pro : t.free}
          </span>
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
    </div>
  );
}
