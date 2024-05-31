import React from "react";
import TodoListItem from "./todoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo, markAsCompleteTodo } from "./action";

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompletePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkAsCompletePressed={onMarkAsCompletePressed}
      />
    ))}
  </div>
);

const mapStateToProp = (state) => ({
  todos: state.todos,
});

const mapDispatchToProp = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkAsCompletePressed: (text) => dispatch(markAsCompleteTodo(text)),
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
