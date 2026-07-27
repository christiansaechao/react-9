import { useState } from "react";
import { initialTasks } from "./mockTasks";

export default function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleDone(id: number) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <div style={{ padding: 16, flex: 1 }}>
      <h2>Tasks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />
            <span
              style={{
                marginLeft: 8,
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 8 }}>
              Delete
            </button>
            <button style={{ marginLeft: 8 }}>Open</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
