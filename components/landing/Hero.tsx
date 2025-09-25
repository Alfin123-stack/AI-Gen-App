"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Translation } from "@/app/page";

interface Props {
  t: Translation;
}

export default function Hero({ t }: Props) {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white px-4">
      <Image
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
        alt="AI Futuristic Background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 -z-10" />

      <motion.div
        className="max-w-3xl px-2 sm:px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          {t.heroTitle}
        </h1>
        <p className="text-base sm:text-lg mb-8 text-gray-200 dark:text-gray-300">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm mx-auto">
          <SignInButton>
            <Button size="lg" className="w-full sm:w-auto px-8">
              {t.getStarted}
            </Button>
          </SignInButton>
          <Link href="/gen-ai" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 bg-white/10 text-white border-white hover:bg-white/20">
              {t.tryFree}
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
