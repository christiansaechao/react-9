import { useState } from "react";
import type { SortOrder } from "./types";

export default function Toolbar() {
  const [title, setTitle] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    console.log("Add task:", title, "(not shared with TaskList yet)");
    setTitle("");
  }

  return (
    <div
      style={{
        padding: 16,
        display: "flex",
        gap: 12,
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      <form onSubmit={handleAdd} style={{ display: "flex", gap: 8 }}>
        <input
          placeholder="New task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
}
