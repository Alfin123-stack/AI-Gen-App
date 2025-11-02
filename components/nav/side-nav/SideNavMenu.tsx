"use client";

import {
  LayoutDashboard,
  FileClock,
  WalletCards,
  Settings,
} from "lucide-react";
import { Translations } from "../SideNav";
import SideNavMenuItem from "./SideNavItem";

export default function SideNavMenu({ t }: { t: Translations }) {
  const menu = [
    {
      key: "dashboard",
      name: t.menu.dashboard,
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      key: "history",
      name: t.menu.history,
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      key: "billing",
      name: t.menu.billing,
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      key: "settings",
      name: t.menu.settings,
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <ul className="space-y-4">
      {menu.map(({ key, ...item }) => (
        <SideNavMenuItem key={key} {...item} />
      ))}
    </ul>
  );
}
