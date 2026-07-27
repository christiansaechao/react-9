export default function Header() {
  const cartCount = 0;

  return (
    <header style={{ padding: 12, borderBottom: "1px solid #ccc" }}>
      <strong>Shop</strong>
      <span style={{ marginLeft: 12 }}>🛒 Cart ({cartCount})</span>
    </header>
  );
}
