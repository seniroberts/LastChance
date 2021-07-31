import React, { ChangeEvent, useState } from "react";
import "./App.css";
import TodoListItems from "./components/TodoListItems";
import { ITask } from "./interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      completionDeadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const closedOutTasks = (taskToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h3>Enter Todo Item and Deadline(in days) </h3>

        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task...."
            onChange={handleUserInput}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline (in Days)..."
            onChange={handleUserInput}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((todoItem: ITask, key: number) => {
          return (
            <TodoListItems
              key={key}
              task={todoItem}
              completedTask={closedOutTasks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
