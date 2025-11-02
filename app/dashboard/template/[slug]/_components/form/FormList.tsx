"use client";

import { ChangeEvent } from "react";
import FormFieldInput from "./FormFieldInput";
import { TemplateInfo } from "@/lib/types";

interface FormListProps {
  template: TemplateInfo | null;
  formData: Record<string, string>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function FormList({
  template,
  formData,
  onChange,
}: FormListProps) {
  return (
    <div className="w-full space-y-5">
      {template?.form.map((field, idx) => (
        <FormFieldInput
          key={idx}
          field={field}
          value={formData[field.name] || ""}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
