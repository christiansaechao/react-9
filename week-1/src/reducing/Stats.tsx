import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const Stats = () => {
  const nums = [4, 9, 2, 10, 7];
  return (
    <ProblemCard
      title="Reduce 10 — Reduce + render summary stats"
      method="reduce"
      question="Use reduce() to compute: total, max, and average. Then render them."
      dataPreview={nums}
    >
      <div>
        {/* TODO:
            - total via reduce
            - max via reduce
            - average = total / nums.length
        */}
      </div>
    </ProblemCard>
  );
};
