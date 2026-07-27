import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
    </ProblemCard>
  );
};
