import React from "react";

export const SearchSimulation = ({ searchTerm }) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];
  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: props.searchTerm }}
    ></ProblemCard>
  );
};
