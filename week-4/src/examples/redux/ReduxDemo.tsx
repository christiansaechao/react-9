import React from "react";
import { Provider } from "react-redux";
import { store, useAppDispatch, useAppSelector } from "./store";
import { addItem, removeItem, clearCart } from "./cartSlice";

const HeaderBadge: React.FC = () => {
  const totalCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div style={{ padding: "8px 16px", background: "#764abc", color: "#fff", borderRadius: "4px" }}>
      🛒 Cart Items (Redux Toolkit): <strong>{totalCount}</strong>
    </div>
  );
};

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = [
    { id: "p1", name: "Redux Toolkit Guide", price: 34.99 },
    { id: "p2", name: "Redux DevTools Keyring", price: 9.99 },
  ];

  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id} style={{ margin: "8px 0" }}>
          <span>{p.name} - ${p.price.toFixed(2)} </span>
          <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const CartDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ marginTop: "16px", padding: "12px", border: "1px solid #764abc" }}>
      <h3>Cart Contents</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)}){" "}
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${totalPrice.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export const ReduxDemo: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Redux Toolkit Global State Example</h2>
        <HeaderBadge />
        <ProductList />
        <CartDrawer />
      </div>
    </Provider>
  );
};

export default ReduxDemo;
