"use client";

import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, Crown, Sparkles, X } from "lucide-react";

export default function SignUpModal({ isOverLimit = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isOverLimit) setOpen(true);
  }, [isOverLimit]);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-6 w-full rounded-lg bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700 transition-colors shadow-md">
        Upgrade Plan
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4">
            <div
              className="relative w-full max-w-md rounded-2xl border border-border 
                         bg-white/80 dark:bg-gray-900/70 backdrop-blur-md 
                         p-6 shadow-xl">
              {/* Close */}
              <button
                title="close"
                name="close"
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Header with icon */}
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
                  <Crown className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Upgrade Your Plan
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Unlock premium features and unlimited access by subscribing.
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-6">
                {[
                  "Unlimited word generation",
                  "Faster processing",
                  "Priority support",
                  "Exclusive AI tools",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="space-y-3">
                <Link
                  href="/membership"
                  className="flex items-center justify-center gap-2 w-full rounded-lg 
                             bg-indigo-600 text-white py-2 font-medium 
                             hover:bg-indigo-700 transition-colors shadow-md">
                  <Sparkles className="w-5 h-5" />
                  View Membership Plans
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg border border-border py-2 font-medium 
                             text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Maybe Later
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
