import React, { useReducer, useState } from "react";
import { Todo } from "./Todo";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [
        ...state,
        { id: Date.now(), text: action.text, status: "active" },
      ];
    case "REMOVE_TODO":
      // Remove todo by id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      // Edit todo by id
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.text = action.text;
          todo.status = action.status;
          return todo;
        }
        return todo;
      });
    default:
      return state;
  }
}

export function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [filterBy, setFilterBy] = useState("completed active");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleEditTodo = (id, text, status) => {
    if (text.trim() === "") return;
    dispatch({ type: "EDIT_TODO", id, text, status});
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const filter = (arr) => {
    return arr.filter((todo) => filterBy.includes(todo.status));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        <button onClick={() => setFilterBy("completed active")}>
          Show All
        </button>
        <button onClick={() => setFilterBy("completed")}>Show Completed</button>
        <button onClick={() => setFilterBy("active")}>Show Active</button>
      </div>
      <ul>
        {filter(todos).map((todo) => (
          <Todo
            todo={todo}
            handleEditTodo={handleEditTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
}
