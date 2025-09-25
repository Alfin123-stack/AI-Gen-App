"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  t: any;
}

export default function CTA({ t }: Props) {
  return (
    <motion.section
      className="py-16 sm:py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white dark:from-indigo-800 dark:to-purple-800 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        {t.ctaTitle}
      </h2>
      <p className="mb-8 text-gray-100 dark:text-gray-200 text-sm sm:text-base md:text-lg">
        {t.ctaSubtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <SignInButton>
          <Button
            size="lg"
            className="px-8 bg-white text-indigo-600 hover:bg-gray-100 w-full sm:w-auto">
            {t.getStarted}
          </Button>
        </SignInButton>
        <Link href="/gen-ai" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            className="px-8 text-black dark:text-white border-white hover:bg-white/20 w-full sm:w-auto">
            {t.tryFree}
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
