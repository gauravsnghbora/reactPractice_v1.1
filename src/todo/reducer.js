import { CREATE_TODO, REMOVE_TODO, MARKASCOMPLETE_TODO } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARKASCOMPLETE_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        return todo.text === text ? { ...todo, isCompleted: true } : todo;
      });
    }
    default:
      return state;
  }
};
