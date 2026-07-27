import type { Task } from "./types";

export const initialTasks: Task[] = [
  { id: 1, title: "Set up project", done: true, createdAt: 1 },
  { id: 2, title: "Design global store", done: false, createdAt: 2 },
  { id: 3, title: "Wire up Sidebar filters", done: false, createdAt: 3 },
  { id: 4, title: "Wire up Toolbar sort/add", done: false, createdAt: 4 },
  { id: 5, title: "Open task in modal", done: false, createdAt: 5 },
];
