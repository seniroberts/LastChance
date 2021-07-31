import React from "react";
import { ITask } from "../interfaces";

interface props {
  task: ITask;
  completedTask(taskToDelete: string): void;
}

const TodoListItems = ({ task, completedTask }: props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.completionDeadline}</span>
      </div>
      <button onClick={() => completedTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoListItems;
