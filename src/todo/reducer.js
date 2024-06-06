import {
  CREATE_TODO,
  REMOVE_TODO,
  MARKASCOMPLETE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_INPROGRESS,
  LOAD_TODOS_SUCCESS,
} from "./action";

const initialState = {
  isLoading: true,
  data: [],
};
export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { removedTodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== removedTodo.id),
      };
    }
    case MARKASCOMPLETE_TODO: {
      const { completedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          return todo.id === completedTodo.id ? completedTodo : todo;
        }),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOAD_TODOS_INPROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
