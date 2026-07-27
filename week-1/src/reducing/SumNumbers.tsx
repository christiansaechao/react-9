import React from "react";
import ProblemCard from "../extras/ProblemCard";

// nums.reduce((acc, curr) => conditional, startingValue);
// total, compute the sums, 0

export const SumNumbers = () => {
  const nums = [1, 2, 3, 4];
  const total = nums.reduce((acc, curr) => acc + curr, 0);

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      method="reduce"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    >
      <span>{total}</span>
    </ProblemCard>
  );
};
