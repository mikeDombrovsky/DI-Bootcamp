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
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.text = action.text;
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
  const [editText, setEditText] = useState("");
  const [isEditActive, setIsEditActive] = useState(false);

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id) => {
    if (editText.trim() === "") return;
    dispatch({ type: "EDIT_TODO", text: editText, id });
    setEditText("");
    setIsEditActive(false);
  };

  const handleShowInput = () => {
    setIsEditActive(true);
    setEditText(todoText);
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
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id} onClick={handleShowInput}>
              {isEditActive ? (
                <input
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
              ) : (
                todo.text
              )}

              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            </li>
            {/* <Todo /> */}
          </>
        ))}
      </ul>
    </div>
  );
}
