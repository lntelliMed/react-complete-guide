import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 25 },
      { name: 'Mike', age: 28 },
      { name: 'Hana', age:29}
    ],
    username: 'SuperUser',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('clicked')
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Mike', age: 28 },
        { name: 'Hana', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 25 },
        { name: event.target.value, age: 28 },
        { name: 'Hana', age: 29 }
      ]
    });
  }

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: ! this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'whilte',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (<div>
                  {this.state.persons.map(person => {
                    return <Person
                      name={person.name}
                      age={person.age} />
                  })}
                </div>
                );
    }
    return (
      <div className="App">
        <h1>Hello, there from React!</h1>
        <p>Below is the list of people:</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}

          <hr />
          <h3>New Tasks</h3>
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
          <UserInput
            changed={this.usernameChangedHandler}
            currentName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />
          <UserOutput userName="Josh" />
      </div>
    );
  }
}

export default App;
