"use client";

import { Translation } from "@/app/page";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Bot, BarChart } from "lucide-react";

interface Props {
  t: Translation;
}

export default function Features({ t }: Props) {
  return (
    <motion.section
      className="py-16 sm:py-20 bg-muted dark:bg-gray-900 transition-colors px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.whyChoose}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.02] transition-transform">
            <CardHeader>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
                <Zap className="w-8 h-8 text-yellow-500" />
                {t.feature1Title}
              </h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              {t.feature1Desc}
            </CardContent>
          </Card>

          <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.02] transition-transform">
            <CardHeader>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
                <Bot className="w-8 h-8 text-green-500" />
                {t.feature2Title}
              </h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              {t.feature2Desc}
            </CardContent>
          </Card>

          <Card className="shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.02] transition-transform">
            <CardHeader>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
                <BarChart className="w-8 h-8 text-blue-500" />
                {t.feature3Title}
              </h3>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              {t.feature3Desc}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
