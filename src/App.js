import { useContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoContext from "./context/TodoConext";

function App() {
  const {todos}=useContext(TodoContext);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm />
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
    </div>
  );
}

export default App;
