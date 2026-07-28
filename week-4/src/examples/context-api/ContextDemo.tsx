import React from "react";
import { CartProvider, useCart } from "./CartContext";

const HeaderBadge: React.FC = () => {
  const { totalCount } = useCart();
  return (
    <div style={{ padding: "8px 16px", background: "#333", color: "#fff", borderRadius: "4px" }}>
      🛒 Cart Items: <strong>{totalCount}</strong>
    </div>
  );
};

const ProductList: React.FC = () => {
  const { addItem } = useCart();

  const products = [
    { id: "p1", name: "React Book", price: 29.99 },
    { id: "p2", name: "TypeScript Mug", price: 14.99 },
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
  const { state, removeItem, clearCart, totalPrice } = useCart();

  return (
    <div style={{ marginTop: "16px", padding: "12px", border: "1px solid #ccc" }}>
      <h3>Cart Contents</h3>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {state.items.map((item) => (
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

export const ContextDemo: React.FC = () => {
  return (
    <CartProvider>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Context API Global State Example</h2>
        <HeaderBadge />
        <ProductList />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default ContextDemo;
