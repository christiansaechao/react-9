import Header from "./Header";
import ProductList from "./ProductList";
import CartDrawer from "./CartDrawer";

export default function Demo() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", gap: 16 }}>
        <ProductList />
        <CartDrawer />
      </div>
    </div>
  );
}
