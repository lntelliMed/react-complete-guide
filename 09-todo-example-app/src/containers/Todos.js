import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import Todo from '../components/Todo';

class Todos extends Component {
  componentDidMount () {
    this.props.onInitTodos();
  }

  addTodo = (todo) => {
    this.props.onTodoAdd(todo);
  }

  removeTodo = (id) => {
    this.props.onTodoRemove(id);
  }

  moveTodoUp = (id) => {
    this.props.onTodoMoveUp(id);
  }

  moveTodoDown = (id) => {
    this.props.onTodoMoveDown(id);
  }

  render () {
    let todoList = null;
    if (this.props.todos) {
      console.log(this.props.todos)
      todoList = <Todo moveUp={this.moveTodoUp} moveDown={this.moveTodoDown} remove={this.removeTodo} add={this.addTodo} todos={this.props.todos} />;
    }
    return (
      <div>
        <h1>Welcome to Todo's App</h1>
        {todoList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitTodos: () => dispatch(actions.fetchTodos()),
    onTodoAdd: (todo) => dispatch(actions.addTodo(todo)),
    onTodoRemove: (id) => dispatch(actions.removeTodo(id)),
    onTodoMoveUp: (id) => dispatch(actions.moveTodoUp(id)),
    onTodoMoveDown: (id) => dispatch(actions.moveTodoDown(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
