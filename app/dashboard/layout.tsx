"use client";

import SideNav from "@/components/nav/SideNav";
import { Menu } from "lucide-react";
import React, { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background to-muted/30 text-foreground">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 p-4 border-r border-border 
                    bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-lg
                    transform transition-transform duration-300 ease-in-out z-40
                    ${open ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:static md:block`}>
        <SideNav />
      </aside>

      {/* Overlay untuk mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-0 h-screen overflow-y-auto">
        {/* Header untuk mobile */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-border bg-card shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            title="Open sidebar menu"
            aria-label="Open sidebar menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {children}
      </main>
    </div>
  );
}
