"use client";

import { Search } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type SearchBoxProps =
  | {
      value: string;
      onChange: (value: string) => void;
      placeholder?: string;
      label?: string;
      description?: string;
    }
  | {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder?: string;
      label?: string;
      description?: string;
    };

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
  label,
  description,
}: SearchBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === "function" && onChange.length === 1) {
      try {
        if (
          (onChange as unknown as (value: string) => void)
            .toString()
            .includes("value")
        ) {
          (onChange as (value: string) => void)(e.target.value);
          return;
        }
      } catch {
        /* fallback ke event */
      }
    }
    (onChange as React.ChangeEventHandler<HTMLInputElement>)(e);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-sm bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border rounded-2xl mb-8">
      <CardHeader className="text-center">
        {label && (
          <h2 className="text-xl md:text-2xl font-bold text-card-foreground">
            {label}
          </h2>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="pl-12 pr-4 py-3 w-full rounded-xl bg-transparent 
                       border text-sm md:text-base text-foreground
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       placeholder:text-muted-foreground
                       transition-colors duration-200"
          />
        </div>
      </CardContent>
    </Card>
  );
}
