import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletePressed }) => (
  <div className="todo-item-container">
    <h2>{todo.text}</h2>
    <div className="buttons-container">
      {todo.isCompleted ? null : (
        <button
          onClick={() => onMarkAsCompletePressed(todo.id)}
          className="completed-button"
        >
          Mark as complete
        </button>
      )}
      <button
        onClick={() => onRemovePressed(todo.id)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
