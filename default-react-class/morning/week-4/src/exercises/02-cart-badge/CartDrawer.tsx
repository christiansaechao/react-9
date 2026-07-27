export default function CartDrawer() {
  const items: { id: number; name: string; price: number }[] = [];

  return (
    <aside style={{ padding: 16, border: "1px dashed #ccc", width: 220 }}>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} — ${item.price}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
