import { useState } from "react";
import List from "./List";
/*
Requirements:
- Input field to add a task
- Button to add task to a list
- Display list of tasks
- Bonus:
  - Delete a task
  - Mark task as completed
*/

// if current_iteration_item !== "Wash the dog" => ["Clean the car", "Throw away garbage", "Go grocery shopping"]

/**
 * ["Wash the dog", "Clean the car", "Throw away garbage", "Go grocery shopping"]
 */

/**
 * task: "Wash the dog" [completed] [delete]
 * task: "Clean the car" [completed] [delete]
 * task: "Throw away garbage" [completed] [delete]
 * task: "Go grocery shopping" [completed] [delete]
 */

/**
 * Components
 * --------------
 * TodoList
 * AddTaskButton.tsx
 * Input.tsx
 * List.tsx |  separate component
 * Task.tsx | separate component
 * DeleteButton.tsx | separate component
 * CompletedButton.tsx | separate component
 */

export type Task = {
  id: number;
  name: string;
  completed: boolean;
  deleted: boolean; // true
};

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");

  function createTaskObject(name: string) {
    const id = tasks.length + 1;

    return { id, name, completed: false, deleted: false };
  }

  return (
    <div>
      <div>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border-1"
          type="text"
        />
        <button
          onClick={() => {
            const newTask = createTaskObject(taskName);
            setTasks([...tasks, newTask]);
          }}
        >
          Submit
        </button>
      </div>
      {tasks.map((ele) => (
        <div>{ele.name}</div>
      ))}
      <List />
    </div>
  );
}
