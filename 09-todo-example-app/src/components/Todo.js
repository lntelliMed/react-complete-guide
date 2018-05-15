import React, { Component } from 'react';

class Todo extends Component {
  state = {
    newTodo: ''
  }

  todoChangeHandler = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  }

  addTodo = () => {
    this.props.add(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  }

  render () {
    return (
      <div>
        {
          this.props.todos.map(t => {
            return (
              <div>
                <span onClick={() => this.props.remove(t.id)} key={t.id}>{t.title}
                </span>
                <button onClick={() => this.props.moveUp(t.id)} >UP</button>
                <button onClick={() => this.props.moveDown(t.id)}>DOWN</button>
              </div>
            )
          })
        }
        <input type="text" onChange={(event) => this.todoChangeHandler(event)} value={this.state.newTodo} />
        <button onClick={() => this.addTodo()}>Add New Todo!</button>
      </div>
    )
  }
}

export default Todo;
