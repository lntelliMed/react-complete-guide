import * as actionTypes from './actionTypes';
import data from '../../data/data';

export const fetchTodos = () => {
  return {
    type: actionTypes.FETCH_TODOS,
    todos: data.todos
  };
};

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    todo
  };
};

export const removeTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    id
  };
}

export const moveTodoUp = (id) => {
  return {
    type: actionTypes.MOVE_TODO_UP,
    id
  };
}

export const moveTodoDown = (id) => {
  return {
    type: actionTypes.MOVE_TODO_DOWN,
    id
  };
}
