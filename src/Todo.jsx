import React, { useContext, useState } from "react";
import { TodoContext } from "./context/context";

const Todo = () => {
  const { todos, saveTodos, removeTodos, checkTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodos(todo);
    e.target.reset();
  };

  const handleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="header">Pending Task's</div>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          // value={todo}
          onChange={handleChange}
          className="form-control"
          placeholder="enter todo..."
          required
        />
      </form>
      {todos.map((task, index) => (
        <div className="task d-flex justify-content-between" key={index}>
          <span
            onClick={() => checkTodos(index)}
            style={{ textDecoration: task.done ? "line-through" : "" }}
          >
            {task.title}
          </span>
          <button className="btn" onClick={() => removeTodos(index)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
