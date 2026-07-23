import { useState } from "react";
import List from "./List";
import type { TaskType } from "../../../types/task.types";

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

/**
 * Option 1: we keep all of our tasks, but mark deleted if it's deleted (true)
 *  - render the list, filter out the deleted ones (they shouldn't show up)
 *
 * Option 2: remove the deleted property, and remove it from the tasks list completely
 *  - update our types, and props in components
 *
 */

// TodoList is the entire application

export default function TodoList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState("");

  function createTaskObject(name: string) {
    const id = tasks.length + 1;

    return { id, name, completed: false, deleted: false };
  }

  // delete function here, use the filter method

  const deleteTask = (taskId: number) => {
    const newTasksArray = tasks.map((task) => {
      if (task.id === taskId) {
        task.deleted = true;
      }

      return task;
    });

    setTasks(newTasksArray);
  };

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
      <List tasks={tasks} deleteFunction={deleteTask} />
    </div>
  );
}
