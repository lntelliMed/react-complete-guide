import * as actionTypes from '../actions/actionTypes';

const initState = {
  todos: []
};

const swapTodos = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    case actionTypes.ADD_TODO:
      let maxId = 0;
      for (let todo of state.todos) {
        if (todo.id > maxId) {
          maxId = todo.id;
        }
      }
      return {
        ...state,
        todos: state.todos.concat({ id: maxId + 1, title: action.todo})
      }
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      }
    case actionTypes.MOVE_TODO_UP:
      let newTodos = [...state.todos];
      for (let i = 0; i < newTodos.length; i++) {
        if (newTodos[i].id === action.id && (i - 1 ) >= 0) {
          swapTodos(newTodos, i, i - 1);
          break;
        }
      }
      return {
        ...state,
        todos: newTodos
      }

    case actionTypes.MOVE_TODO_DOWN:
      let finalTodos = [...state.todos];
      for (let i = 0; i < finalTodos.length; i++) {
        if (finalTodos[i].id === action.id && (i + 1) < finalTodos.length) {
          swapTodos(finalTodos, i, i + 1);
          break;
        }
      }
      return {
        ...state,
        todos: finalTodos
      }

    default:
      return state;
  }
}

export default reducer;
