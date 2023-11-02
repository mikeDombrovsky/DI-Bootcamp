import "./App.css";
import { useState } from "react";
import Tasks from "./Tasks";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (e.key === "Enter") {
      if (task == "") {
        return;
      }
      const tasksCopy = [...tasks];
      tasksCopy.push(task);
      setTasks(tasksCopy);
      setTask("");
    }
  };

  const removeTask = (i) => {
    console.log(i);
    const tasksCopy = [...tasks];
    tasksCopy.splice(i, 1);
    console.log("tasksCopy ", tasksCopy);
    setTasks(tasksCopy);
  };

  return (
    <div className="App">
      <h1>Todo's</h1>
      <Tasks tasks={tasks} removeTask={removeTask} />
      <div className="addTask">
        <label for="task_input">Add a new todo</label>
        <input
          onInput={(e) => setTask(e.target.value)}
          onKeyDown={(e) => addTask(e)}
          value={task}
          name="task_input"
        />
      </div>
    </div>
  );
}

export default App;
