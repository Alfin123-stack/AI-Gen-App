import { TemplateInfo } from "@/lib/types";
import Image from "next/image";


interface FormHeaderProps {
  template: TemplateInfo | null;
}

export default function FormHeader({ template }: FormHeaderProps) {
  return (
    <>
      <div className="p-5 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 mb-4">
        <Image
          src={template?.icon || ""}
          alt={template?.name || ""}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {template?.name}
      </h1>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-sm">
        {template?.desc}
      </p>
    </>
  );
}
