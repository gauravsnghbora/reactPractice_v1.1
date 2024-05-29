import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h2>{todo.text}</h2>
    <div className="buttons-container">
      <button className="completed-button">Mark as complete</button>
      <button className="remove-button">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
