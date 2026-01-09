import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import noData from "../assets/images/no-data.jpg"
export default function TodoList({ filter }) {
  const { todos } = useTodos();

  const filtered = todos.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending") return !t.completed;
    return true;
  });

  if (!filtered.length)
    return (
      <div class="no-data">
        <div class="no-data-img">
          <img src={noData} alt="No data available" />
        </div>
        <h4 class="no-data-title">No data here</h4>
      </div>
    );

  return filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}
