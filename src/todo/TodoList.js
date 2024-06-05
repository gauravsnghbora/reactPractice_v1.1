import React, { useEffect } from "react";
import TodoListItem from "./todoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo, markAsCompleteTodo } from "./action";
import {
  displayAlert,
  loadTodos,
  removeTodoRequest,
  updateTodoRequest,
} from "./thunk";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkAsCompletePressed,
  isLoading,
  loadTodos,
}) => {
  useEffect(() => {
    loadTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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
  return isLoading ? loadingMessage : content;
};

const mapStateToProp = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProp = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompletePressed: (id) => dispatch(updateTodoRequest(id)),
  onDisplayAlertPressed: (text) => dispatch(displayAlert(text)),
  loadTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
