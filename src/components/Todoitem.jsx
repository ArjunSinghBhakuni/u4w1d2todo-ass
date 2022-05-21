import React, { useState } from "react";
import "./Todo.css";
const Todoitem = ({ todo, OnDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleChange = (e) => {
    setIsCompleted(e.target.checked);
  };

  return (
    <div className="lists">
      

      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      <div className={isCompleted ? "striked" : "none"}>{todo.value}</div>
      

      <button onClick={() => OnDelete(todo.id)}>delete</button>
    </div>
  );
};
export default Todoitem;
