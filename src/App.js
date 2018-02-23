import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, there from React!</h1>
        <p>Below is the list of people:</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
