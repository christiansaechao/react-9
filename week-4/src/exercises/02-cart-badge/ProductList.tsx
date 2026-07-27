import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Coffee Mug", price: 12 },
  { id: 2, name: "Notebook", price: 6 },
  { id: 3, name: "Sticker Pack", price: 4 },
];

export default function ProductList() {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  function addToCart(id: number) {
    setAddedIds((ids) => [...ids, id]);
  }

  return (
    <section style={{ padding: 16 }}>
      <h2>Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {PRODUCTS.map((product) => (
          <li key={product.id} style={{ marginBottom: 8 }}>
            {product.name} — ${product.price}{" "}
            <button onClick={() => addToCart(product.id)}>Add to cart</button>
          </li>
        ))}
      </ul>
      <p>Added locally (not shared yet): {addedIds.length} item(s)</p>
    </section>
  );
}
