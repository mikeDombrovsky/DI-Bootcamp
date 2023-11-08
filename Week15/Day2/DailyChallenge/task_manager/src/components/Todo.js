import { useState } from "react";

export const Todo = ({ todo }) => {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <li key={todo.id} onClick={() => setIsEdited(!isEdited)}>
      {/* {isEdited ? (
        todo.text
      ) : (
        <input onChange={(e) => setEditText(e.target.value)} value={todo.text}/>
      )}
      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
      <button onClick={() => handleRemoveTodo(todo.id)}>Edit</button> */}
    </li>
  );
};
