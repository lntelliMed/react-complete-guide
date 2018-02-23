import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, there from React!</h1>
        <p>Below is the list of people:</p>
        <Person name="John" age="25"/>
        <Person name="Mike" age="28" >My Hobbies: Photography</Person>
        <Person name="Hana" age="29" />
      </div>
    );
  }
}

export default App;
