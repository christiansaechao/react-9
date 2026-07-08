import React from "react";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";
  return (
    <ProblmCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    ></ProblmCard>
  );
};
