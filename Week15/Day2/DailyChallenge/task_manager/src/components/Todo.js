import { useState, useEffect } from "react";

export const Todo = ({ todo, handleEditTodo, handleRemoveTodo }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    console.log(todo);
  });

  const edit = (e, text) => {
    if (e.key === "Enter") {
      handleEditTodo(todo.id, text, todo.status);
      setIsBeingEdited(false);
    }
  };

  const editStatus = (isChecked) => {
    if (isChecked) {
      handleEditTodo(todo.id, editText, "completed");
    } else {
      handleEditTodo(todo.id, editText, "active");
    }
  };

  const showInput = () => {
    setIsBeingEdited(true);
  };

  return (
    <li key={todo.id} onKeyDown={(e) => edit(e, editText)}>
      <input
        type="checkbox"
        onChange={(e) => editStatus(e.target.checked)}
        checked={todo.status === "completed" ? true : false}
      />
      {isBeingEdited ? (
        <input
          type="text"
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
        />
      ) : (
        <>
          <span onClick={showInput}>{todo.text}</span>
        </>
      )}
      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};
