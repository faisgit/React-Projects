import React from "react";
import { useState } from "react";
import Todo from "./components/Todo";
import FormTodo from "./components/FormTodo";
export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodos = [...todos,  {
      text: text,
      isDone: false,
    },];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="flex justify-center mt-10">
    <div className="w-96 border-2 border-solid rounded-xl shadow-xl">
      <h1 className="text-center font-bold  text-xl mb-3">To Do List</h1>
      < FormTodo  addTodo = {addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          markTodo={markTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
    </div>
  );
}
