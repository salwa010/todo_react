import { useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import AddTodoDialog from "./components/AddTodoDialog";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";
import "./style.css";
export default function App() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("All");

  return (
    <TodoProvider>
      <div className="container">
        <h1>TODO App</h1>
        <div className="header-row">
          <Tabs active={tab} setActive={setTab} />

          <button className="btn btn-primary" onClick={() => setOpen(true)}>Add Task</button>
        </div>

        <TodoList filter={tab} />
        <AddTodoDialog open={open} onClose={() => setOpen(false)} />
      </div>
    </TodoProvider>
  );
}
