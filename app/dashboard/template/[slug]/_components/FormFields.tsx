"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent } from "react";
import { Loader2Icon } from "lucide-react";
import { TemplateInfo } from "./FormTemplate";

interface FormFieldsProps {
  template: TemplateInfo;
  formData: Record<string, string>;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function FormFields({
  template,
  formData,
  loading,
  onChange,
  onSubmit,
}: FormFieldsProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md p-8 border rounded-2xl shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm
                 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="p-5 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 mb-4">
        <Image
          src={template.icon}
          alt={template.name}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      {/* Title + Description */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {template.name}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-sm">
        {template.desc}
      </p>

      {/* Fields */}
      <div className="w-full space-y-5">
        {template.form.map((field, idx) => (
          <div key={idx} className="flex flex-col text-left">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.field === "input" ? (
              <input
                type="text"
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={onChange}
                placeholder={field.label}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           px-4 py-3 text-sm bg-white dark:bg-gray-800 
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                           outline-none transition-all"
              />
            ) : (
              <textarea
                name={field.name}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={onChange}
                placeholder={field.label}
                rows={4}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 
                           px-4 py-3 text-sm bg-white dark:bg-gray-800 
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                           outline-none transition-all resize-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full flex items-center justify-center gap-2 
                   rounded-lg px-4 py-3 text-sm font-medium
                   bg-indigo-600 text-white hover:bg-indigo-700 
                   disabled:opacity-60 disabled:cursor-not-allowed
                   transition-all shadow-md">
        {loading ? <Loader2Icon className="animate-spin" /> : "Generate"}
      </button>
    </form>
  );
}
