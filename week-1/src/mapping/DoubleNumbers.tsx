import ProblemCard from "../components/ProblemCard";

/**
 * Render out al ist of each number doubled
 */

export const DoubleNumbers = () => {
  const nums = [5, 10, 15];
  return (
    <ProblemCard
      title="Map 05 — Add computed data"
      method="map"
      question="Render each number doubled."
      dataPreview={nums}
    >
    </ProblemCard>
  );
};
