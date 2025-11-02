"use client";

import QueryCardHeader from "./QueryCardHeader";
import QueryCardBody from "./QueryCardBody";
import QueryCardFooter from "./QueryCardFooter";

interface Query {
  _id: string;
  template: { name: string; desc: string; icon: string };
  email: string;
  query: string;
  content: string;
  createdAt: string;
}

export default function HistoryQueryCard({ query }: { query: Query }) {
  return (
    <div
      className="p-6 rounded-2xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 transition-colors hover:border-primary/50 flex flex-col h-full">
      <QueryCardHeader
        icon={query.template.icon}
        name={query.template.name}
        createdAt={query.createdAt}
      />
      <QueryCardBody queryText={query.query} />
      <QueryCardFooter queryId={query._id} />
    </div>
  );
}
