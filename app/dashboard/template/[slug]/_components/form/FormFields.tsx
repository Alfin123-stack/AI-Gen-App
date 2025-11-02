"use client";

import { ChangeEvent, FormEvent } from "react";
import FormHeader from "./FormHeader";
import FormSubmitButton from "./FormSubmitButton";
import { TemplateInfo } from "@/lib/types";
import FormList from "./FormList";

interface FormFieldsProps {
  template: TemplateInfo | null;
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
      {/* Header */}
      <FormHeader template={template} />

      {/* Fields */}
      <FormList onChange={onChange} formData={formData} template={template} />

      {/* Submit */}
      <FormSubmitButton loading={loading} />
    </form>
  );
}
