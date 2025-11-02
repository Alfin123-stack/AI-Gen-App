"use client";

import Link from "next/link";

export default function TopNavLogo() {
  return (
    <Link
      href="/"
      className="text-lg sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition whitespace-nowrap">
      AI<span className="text-gray-900 dark:text-white">Gen</span>
    </Link>
  );
}
