export default function Navbar() {
  const user = null as { name: string } | null;

  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ccc" }}>
      <strong>My App</strong>
      <span style={{ marginLeft: 12 }}>
        {user ? (
          <>
            Hi, {user.name}! <button>Log out</button>
          </>
        ) : (
          "Not logged in"
        )}
      </span>
    </nav>
  );
}
