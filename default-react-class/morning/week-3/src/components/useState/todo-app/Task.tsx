import React from "react";
import type { TaskType } from "../../../types/task.types";

/**
 * Template for 1 task
 *
 * id
 * name
 * completed
 * deleted
 */

const Task = ({ task, deleteFunction }: { task: TaskType, deleteFunction: (taskId: number) => void }) => {

  return (
    <div className="flex flex-row gap-2">
      <text>{task.id}. {task.name}</text>
      <button className="border-1 rounded-xl">{task.completed ? "Completed" : "Get this done"}</button>
      <button className="border-1 rounded-xl" onClick={() => {deleteFunction(task.id)}}>Delete</button>
    </div>
  );
};

export default Task;
