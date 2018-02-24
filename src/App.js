import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 25 },
      { name: 'Mike', age: 28 },
      { name: 'Hana', age:29}
    ]
  }

  switchNameHandler = () => {
    // console.log('clicked')
    this.setState({
      persons: [
        { name: 'Johnathan', age: 25 },
        { name: 'Mike', age: 28 },
        { name: 'Hana', age: 27 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, there from React!</h1>
        <p>Below is the list of people:</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  >My Hobbies: Photography</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    );
  }
}

export default App;
