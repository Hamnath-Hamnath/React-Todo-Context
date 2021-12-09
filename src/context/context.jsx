import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Reading",
      done: false
    },
    {
      id: 2,
      title: "writing",
      done: true
    },
    {
      id: 3,
      title: "shopping",
      done: false
    }
  ]);

  const saveTodos = (todo) => {
    setTodos([
      ...todos,
      {
        id: todo.length + 1,
        title: todo.title,
        done: false
      }
    ]);
  };

  const removeTodos = (todoIndex) => {
    todos.splice(todoIndex, 1);
    setTodos([...todos]);
  };

  const checkTodos = (todo) => {
    const data = todos[todo];
    data.done = !data.done;

    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodos, removeTodos, checkTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
