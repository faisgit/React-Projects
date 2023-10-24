import React from "react";
import { Button } from "@material-tailwind/react";
export default function Todo({ todo, index, markTodo, removeTodo }) {
  return(
    <div className="mx-10 mt-3 mb-1">
    <div className="flex justify-between items-center">
      <div className="">
    <span style={{textDecoration : todo.isDone ? "line-through" : ""}}>{todo.text}</span>
      </div>
    <div>
        <Button variant="outlined" color="green" className="mr-2" onClick={() => markTodo(index)}>✓</Button>
        <Button variant="outlined" color="red" onClick={() => removeTodo(index)}>✕</Button>
    </div>
  </div>
  </div>
  )

    
}
