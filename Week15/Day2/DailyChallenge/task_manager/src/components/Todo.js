import { useState, useRef, useEffect } from "react";

export const Todo = ({ todo, handleEditTodo, handleRemoveTodo }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [status, setStatus] = useState("active");
  const [checked, setChecked] = useState(false);
  const checkboxRef = useRef();
  const spanRef = useRef();

  useEffect(() => {
    console.log("status:", status, "checked:", checked);
    console.log(todo);
    console.log('-------');
  }, [checked, status]);

  const edit = (e, text) => {
    if (e.key === "Enter") {
      handleEditTodo(todo.id, text, status);
      setIsBeingEdited(false);
    }
  };

  const editStatus = (isChecked) => {
    setChecked(isChecked);
    if (isChecked) {
      setStatus("completed");
      handleEditTodo(todo.id, editText, "completed");
    } else {
      setStatus("active");
      handleEditTodo(todo.id, editText, "active");
    }
    console.log(
      "status:",
      status,
      "checked:",
      checked,
      "isChecked:",
      isChecked
    );
    console.log(todo);
  };

  const showInput = (e) => {
    setIsBeingEdited(true);
  };

  return (
    <li key={todo.id} onKeyDown={(e) => edit(e, editText)}>
      <input
        ref={checkboxRef}
        type="checkbox"
        onChange={(e) => editStatus(e.target.checked)}
        checked={checked}
      />
      {isBeingEdited ? (
        <input
          type="text"
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
        />
      ) : (
        <>
          <span ref={spanRef} onClick={showInput}>
            {todo.text}
          </span>
        </>
      )}
      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};
