// reduce, map, filter
// map returns a new array with every element
// filter returns a new array based on whatever conditional
// reduce

// array.reduce((acc, curr) => conditional logic, initial value);

export const SumPrices = () => {
  const products = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 2, name: "Monitor", price: 82 },
    { id: 2, name: "Chocolate", price: 29 },
  ];

  const totalSum = products.reduce((acc, curr) => (acc += curr.price), 0);

  return (
    <ProblemCard
      title="Reduce 03 — Sum object values"
      method="reduce"
      question="Use reduce() to sum all product prices."
      dataPreview={products}
    ></ProblemCard>
  );
};
