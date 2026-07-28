import React from "react";
import { useCartStore } from "./useCartStore";

const HeaderBadge: React.FC = () => {
  // Subscribe only to the computed total count so this component re-renders
  // only when total count changes.
  const totalCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div style={{ padding: "8px 16px", background: "#2b5c8f", color: "#fff", borderRadius: "4px" }}>
      🛒 Cart Items (Zustand): <strong>{totalCount}</strong>
    </div>
  );
};

const ProductList: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);

  const products = [
    { id: "p1", name: "Zustand Handbook", price: 24.99 },
    { id: "p2", name: "React Sticker", price: 4.99 },
  ];

  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id} style={{ margin: "8px 0" }}>
          <span>{p.name} - ${p.price.toFixed(2)} </span>
          <button onClick={() => addItem(p.id, p.name, p.price)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const CartDrawer: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ marginTop: "16px", padding: "12px", border: "1px solid #2b5c8f" }}>
      <h3>Cart Contents</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)}){" "}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${totalPrice.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export const ZustandDemo: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Zustand Global State Example</h2>
      {/* Notice: No <Provider> wrapper needed! */}
      <HeaderBadge />
      <ProductList />
      <CartDrawer />
    </div>
  );
};

export default ZustandDemo;
