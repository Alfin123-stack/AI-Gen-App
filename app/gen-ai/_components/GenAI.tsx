"use client";

import { useState } from "react";
import { HeroSection, InputCard, ResponseCard } from ".";

export default function GenAI() {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const t = {
    en: {
      title: "✨ Gemini 2.5 Flash Playground",
      subtitle:
        "Test the power of AI — generate text instantly for free before signing up. No account required.",
      enterPrompt: "Enter your prompt",
      placeholder: "Type your idea...",
      generate: "Generate",
      generating: "Generating...",
      clear: "Clear",
      aiResponse: "AI Response",
      powered: "Powered by Gemini 2.5 Flash",
      loading: "Generating response...",
    },
    id: {
      title: "✨ Playground Gemini 2.5 Flash",
      subtitle:
        "Uji kekuatan AI — hasilkan teks instan gratis tanpa harus mendaftar.",
      enterPrompt: "Masukkan prompt kamu",
      placeholder: "Tulis idemu...",
      generate: "Hasilkan",
      generating: "Sedang diproses...",
      clear: "Bersihkan",
      aiResponse: "Respon AI",
      powered: "Didukung oleh Gemini 2.5 Flash",
      loading: "Sedang membuat respon...",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  const handleClear = () => {
    setResponse("");
    setInput("");
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start py-16 px-4 
      bg-gradient-to-b from-indigo-50 via-white to-purple-50 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
      <HeroSection t={t} />
      <InputCard
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onClear={handleClear}
        t={t}
        hasResponse={!!response}
      />
      <div className="w-full max-w-2xl mt-8">
        <ResponseCard response={response} isLoading={isLoading} t={t} />
      </div>
    </main>
  );
}
