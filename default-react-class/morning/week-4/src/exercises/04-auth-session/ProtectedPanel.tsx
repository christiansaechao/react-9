export default function ProtectedPanel() {
  const user = null as { name: string; role: string } | null;

  if (!user) {
    return <p style={{ padding: 16 }}>Please log in to see this content.</p>;
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Secret Dashboard</h2>
      <p>
        Welcome {user.name}, your role is {user.role}.
      </p>
    </div>
  );
}
