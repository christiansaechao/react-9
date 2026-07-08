import ProblemCard from "../extras/ProblemCard";

export const EvensOnly = () => {

  return (
    <ProblemCard
      title="Filter 01 — Even numbers only"
      method="filter"
      question="Filter the array to only even numbers, then render them."
      dataPreview={nums}
    >
      {evenNumbers.map((evenNumber) => (
        <p>evenNumber are: {evenNumber}</p>
      ))}
    </ProblemCard>
  );
};
