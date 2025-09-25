"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { Translations } from "./GenAI";

interface InputCardProps {
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
  t: Translations;
  hasResponse: boolean;
}

export default function InputCard({
  input,
  setInput,
  isLoading,
  onSubmit,
  onClear,
  t,
  hasResponse,
}: InputCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="w-full max-w-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <CardHeader>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t[language].enterPrompt}
        </h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder={t[language].placeholder}
            className="w-full dark:bg-gray-900 dark:text-white dark:border-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? t[language].generating : t[language].generate}
          </Button>
        </form>
      </CardContent>
      {hasResponse && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" onClick={onClear}>
            {t[language].clear}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
