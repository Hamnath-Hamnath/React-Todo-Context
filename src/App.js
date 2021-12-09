import TodoProvider from "./context/context";
import "./styles.css";
import Todo from "./Todo";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}
