import { TemplateInfo } from "@/lib/types";
import { ChangeEvent } from "react";


type FormField = NonNullable<TemplateInfo["form"]>[number];

interface FormFieldInputProps {
  field: FormField;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function FormFieldInput({
  field,
  value,
  onChange,
}: FormFieldInputProps) {
  return (
    <div className="flex flex-col text-left">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {field.label}
        {field.required && <span className="text-red-500">*</span>}
      </label>

      {field.field === "input" ? (
        <input
          type="text"
          name={field.name}
          required={field.required}
          value={value}
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
          value={value}
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
  );
}
