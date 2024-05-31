import React, { useState } from "react";
import "./NewTodoForm.css";
import { connect } from "react-redux";
import { createTodo } from "./action";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some((text) => text === inputValue);
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProp = (state) => ({
  todos: state.todos,
});
const mapDispatchToProp = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProp, mapDispatchToProp)(NewTodoForm);
