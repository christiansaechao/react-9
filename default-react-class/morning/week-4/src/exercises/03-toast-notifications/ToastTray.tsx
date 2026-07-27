type Toast = { id: number; message: string; kind: "success" | "error" };

export default function ToastTray() {
  const toasts: Toast[] = [];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            color: "#fff",
            background: toast.kind === "error" ? "#c0392b" : "#27ae60",
          }}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
