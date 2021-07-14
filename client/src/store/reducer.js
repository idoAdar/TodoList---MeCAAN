import { GET_ALL, CREATE, DELETE, UPDATE, EXIST } from './actionTypes';

const initState = {
  todos: [],
  isLoading: false,
  message: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        todos: action.payload,
      };
    case CREATE:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    case UPDATE:
      const updatedTodo = action.payload;
      const todoIndex = state.todos.findIndex(
        (todo) => todo._id === updatedTodo._id
      );
      state.todos[todoIndex] = updatedTodo;
      return {
        ...state,
      };
    case EXIST: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
