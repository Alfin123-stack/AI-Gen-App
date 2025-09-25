
"use client";

import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";

export default function Setting() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Hindari flash putih/hitam saat SSR
    return null;
  }

  return (
    <div className="flex justify-center items-center w-full">
      <UserProfile
        appearance={{
          baseTheme: resolvedTheme === "dark" ? dark : undefined,
          variables: {
            colorPrimary: "#4f46e5",
          },
          elements: {
            rootBox: "w-full",
            card: "w-full shadow-none border-0 bg-transparent",
          },
        }}
        routing="hash"
      />
    </div>
  );
}
