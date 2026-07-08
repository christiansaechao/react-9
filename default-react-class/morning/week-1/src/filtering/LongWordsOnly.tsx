import ProblemCard from "../extras/ProblemCard";

// array.filter((item) => conditional)

export const LongWordsOnly = () => {
  const words = [
    "tiny",
    "oranges",
    "bigger",
    "elephant",
    "cat",
    "giraffe",
    "tiger",
    "gorilla",
  ];

  const filterWord = words.filter((word) => word.length > 4);

  return (
    <ProblemCard
      title="Filter 02 — Filter strings by length"
      method="filter"
      question="Render only words longer than 4 characters."
      dataPreview={words}
    >
      {filterWord.map((word, index) => (
        <li key={word + index}>{word}</li>
      ))}
    </ProblemCard>
  );
};
