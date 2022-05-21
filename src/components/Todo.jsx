import React, { useState } from "react";
import Todoitem from "./Todoitem";
export const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  let [todos, setTodos] = useState([]);

  const HandlerOnChange = (e) => {
    setNewTodo(e.target.value);
  };
  const HandlerOnClick = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        value: newTodo,
        isCompleted: false,
      },
    ]);
    setNewTodo("");
  };
const OnDelete = (id)=>{
let remainTodo = todos.filter(todo=> todo.id !==id)
setTodos(remainTodo)
}
  return (
    <div className="App">
      <h1>Todo App</h1>
        <div>
          {todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo}  OnDelete={OnDelete}/>
          ))}
        </div>
      <input type="text" value={newTodo} onChange={HandlerOnChange} />
      <button onClick={HandlerOnClick}>+</button>
    </div>
  );
};
