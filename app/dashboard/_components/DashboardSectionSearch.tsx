import SearchBox from "@/components/ui/SearchBox";
import { ChangeEvent } from "react";

interface SectionSearchProps {
  search: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  t: {
    chooseTemplate: string;
    searchPlaceholder: string;
  };
}

export default function DashboardSectionSearch({
  search,
  handleChange,
  t,
}: SectionSearchProps) {
  return (
    <div className="text-center">
      <div className="w-full mx-auto">
        <SearchBox
          value={search}
          onChange={handleChange}
          label={t.chooseTemplate}
          placeholder={t.searchPlaceholder}
        />
      </div>
    </div>
  );
}
