"use client";


import { useTryAI } from "@/app/_hooks/useTryAI";
import TryAIHero from "./TryAIHero";
import TryAIInput from "./TryAIInput";
import TryAIResponse from "./TryAIResponse";

export default function TryAI() {
  const { input, setInput, response, isLoading, handleSubmit, handleClear, t } =
    useTryAI();

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start py-16 px-4 
      bg-gradient-to-b from-indigo-50 via-white to-purple-50 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
      <TryAIHero t={t} />
      <TryAIInput
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onClear={handleClear}
        t={t}
        hasResponse={!!response}
      />
      <div className="w-full max-w-2xl mt-8">
        <TryAIResponse response={response} isLoading={isLoading} t={t} />
      </div>
    </main>
  );
}
