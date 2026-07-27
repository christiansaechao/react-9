export type Task = {
  id: number;
  title: string;
  done: boolean;
  createdAt: number;
};

export type SortOrder = "newest" | "oldest" | "alphabetical";
export type Filter = "all" | "active" | "done";
