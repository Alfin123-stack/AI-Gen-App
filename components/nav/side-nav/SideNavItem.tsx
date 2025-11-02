"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SideNavMenuItemProps {
  name: string;
  icon: LucideIcon;
  path: string;
}

export default function SideNavMenuItem({
  name,
  icon: Icon,
  path,
}: SideNavMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li>
      <Link
        href={path}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          isActive
            ? "bg-indigo-600 text-white shadow-md"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        )}>
        <Icon
          className={cn(
            "w-5 h-5 shrink-0 transition-colors",
            isActive
              ? "text-white"
              : "text-gray-400 group-hover:text-indigo-500"
          )}
        />
        <span className="truncate">{name}</span>
      </Link>
    </li>
  );
}
