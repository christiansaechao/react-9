import ProblemCard from "../components/ProblemCard";

export const RankedList = () => {
  const items = ["Learn JS", "Practice map()", "Build UI"];
  return (
    <ProblemCard
      title="Map 08 — Use index for ranking"
      method="map"
      question="Render a ranked list: 1. item, 2. item, etc."
      dataPreview={items}
    >
    </ProblemCard>
  );
};
