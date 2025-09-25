"use client";

import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/app/_contexts/LanguageContext";

interface ResponseCardProps {
  response: string;
  isLoading: boolean;
  t: any;
}

export default function ResponseCard({ response, isLoading, t }: ResponseCardProps) {
  const { language } = useLanguage();

  if (isLoading) {
    return (
      <Card className="p-6 animate-pulse text-gray-400 dark:bg-gray-800 dark:text-gray-500">
        {t[language].loading}
      </Card>
    );
  }

  if (!response) return null;

  return (
    <Card className="shadow-md bg-white/70 backdrop-blur-md dark:bg-gray-800/80 dark:border-gray-700 transition-colors">
      <CardHeader>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t[language].aiResponse}
        </h2>
      </CardHeader>
      <CardContent className="prose max-w-none dark:prose-invert">
        <ReactMarkdown>{response}</ReactMarkdown>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          {t[language].powered}
        </p>
      </CardFooter>
    </Card>
  );
}
