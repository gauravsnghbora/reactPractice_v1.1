export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARKASCOMPLETE_TODO = "MARKASCOMPLETE_TODO";
export const LOAD_TODOS_INPROGRESS = "LOAD_TODOS_INPROGRESS";
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const removeTodo = (removedTodo) => ({
  type: REMOVE_TODO,
  payload: { removedTodo },
});

export const markAsCompleteTodo = (completedTodo) => ({
  type: MARKASCOMPLETE_TODO,
  payload: { completedTodo },
});

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_INPROGRESS,
});

export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
