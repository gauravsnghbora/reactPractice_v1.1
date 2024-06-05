import {
  CREATE_TODO,
  REMOVE_TODO,
  MARKASCOMPLETE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_INPROGRESS,
  LOAD_TODOS_SUCCESS,
} from "./action";

export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TODOS_INPROGRESS:
      return true;
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_SUCCESS:
      return false;
    default:
      return state;
  }
};
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      const { removedTodo } = payload;
      return state.filter((todo) => todo.id !== removedTodo.id);
    }
    case MARKASCOMPLETE_TODO: {
      const { completedTodo } = payload;
      return state.map((todo) => {
        return todo.id === completedTodo.id ? completedTodo : todo;
      });
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_INPROGRESS:
    default:
      return state;
  }
};
