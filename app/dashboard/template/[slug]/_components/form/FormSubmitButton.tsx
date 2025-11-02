import { Loader2Icon } from "lucide-react";

interface FormSubmitButtonProps {
  loading: boolean;
}

export default function FormSubmitButton({ loading }: FormSubmitButtonProps) {
  return (
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
  );
}
