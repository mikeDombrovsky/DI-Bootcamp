
export const Todo = () => {
    return (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        <button onClick={() => handleRemoveTodo(todo.id)}>Edit</button>
      </li>
    );
}