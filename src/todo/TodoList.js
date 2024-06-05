import React, { useEffect } from "react";
import TodoListItem from "./todoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import {
  getIsTodosLoading,
  getTodos,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";
import {
  displayAlert,
  loadTodos,
  removeTodoRequest,
  updateTodoRequest,
} from "./thunk";

const TodoList = ({
  completedTodos,
  inCompleteTodos,
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
      <h3>Completed Todos</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkAsCompletePressed={onMarkAsCompletePressed}
        />
      ))}

      <h3>InComplete Todos</h3>
      {inCompleteTodos.map((todo) => (
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
  completedTodos: getCompletedTodos(state),
  inCompleteTodos: getIncompleteTodos(state),
  isLoading: getIsTodosLoading(state),
});

const mapDispatchToProp = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompletePressed: (id) => dispatch(updateTodoRequest(id)),
  onDisplayAlertPressed: (text) => dispatch(displayAlert(text)),
  loadTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
