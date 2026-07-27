import { initialTasks } from "./mockTasks";

export default function TaskDetailModal() {
  const selectedTaskId: number | null = null;
  const selectedTask = initialTasks.find((task) => task.id === selectedTaskId);

  if (!selectedTask) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 8 }}>
        <h2>{selectedTask.title}</h2>
        <p>Status: {selectedTask.done ? "Done" : "Active"}</p>
        <button>Close</button>
      </div>
    </div>
  );
}
