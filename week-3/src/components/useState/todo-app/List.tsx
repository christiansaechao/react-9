import Task from "./Task";
import type { TaskType } from "../../../types/task.types";

type ListType = { tasks: TaskType[]; deleteFunction: (taskid: number) => void };

/**
 * Template - a list of tasks
 *
 *
 */

export default function List({ tasks, deleteFunction }: ListType) {
  const filteredTasks = tasks.filter((task) => !task.deleted);

  console.log(filteredTasks);

  return (
    <div className="border-1">
      <h1>List For Tasks</h1>
      <div className="flex flex-col justify-center items-center">
        {filteredTasks.map((task) => {
          return <Task task={task} deleteFunction={deleteFunction} />;
        })}
      </div>
    </div>
  );
}
