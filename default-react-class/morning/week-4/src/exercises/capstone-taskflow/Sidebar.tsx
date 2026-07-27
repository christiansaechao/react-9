import { useState } from "react";
import { initialTasks } from "./mockTasks";
import type { Filter } from "./types";

export default function Sidebar() {
  const [filter, setFilter] = useState<Filter>("all");

  const total = initialTasks.length;
  const active = initialTasks.filter((t) => !t.done).length;
  const done = initialTasks.filter((t) => t.done).length;

  return (
    <aside style={{ padding: 16, width: 180, borderRight: "1px solid #ccc" }}>
      <h3>Overview</h3>
      <p>Total: {total}</p>
      <p>Active: {active}</p>
      <p>Done: {done}</p>

      <h3>Filter</h3>
      {(["all", "active", "done"] as Filter[]).map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name="filter"
              checked={filter === option}
              onChange={() => setFilter(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </aside>
  );
}
