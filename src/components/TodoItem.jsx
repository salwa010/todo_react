import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { completeTodo, deleteTodo } = useTodos();

  return (
    <div className="todo-row">
      <input
        type="checkbox"
        checked={todo.completed}
        disabled={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />

      <div className="content">
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        <span className={todo.completed ? "completed" : "pending"}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>🗑</button>
    </div>
  );
}
