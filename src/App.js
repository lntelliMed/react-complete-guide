import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'John', age: 25 },
      { id: 'a2', name: 'Mike', age: 28 },
      { id: 'a3', name: 'Hana', age:29}
    ],
    username: 'SuperUser',
    showPersons: false,
    userInput: ''
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Mike', age: 28 },
        { name: 'Hana', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id);
    let person = this.state.persons[personIndex];
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: ! this.state.showPersons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons:  persons });
  }

  // textLengthHandler(event){
  //   this.setState({
  //     enteredText: event.target.value
  //   });
  // }

  // deleteCharHandler = (event, charIndex) => {
  //   const originalText = this.state.enteredText;
  //   let charArr = originalText.split('');
  //   charArr.splice(charIndex, 1);
  //   this.setState({
  //     enteredText: charArr.join('')
  //   });
  // }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    // const enteredChars = this.state.enteredText.split('');
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    let persons = null;
    if(this.state.showPersons){
      persons = (<div>
                  {this.state.persons.map((person, index) => {
                    return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => { this.nameChangedHandler(event, person.id) }}
                      />
                  })}
                </div>
                );
      style.backgroundColor = 'red';
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
        {/* Enter Text: <input type="text" onChange={(event) => this.textLengthHandler(event)} value={this.state.enteredText}/>
        <br />
        Entered Text Length: <p>{this.state.enteredText.length}</p>
        <ValidationComponent enteredTextLength={this.state.enteredText.length} />
          {enteredChars.map((c, index) =>
          {
            return (<CharComponent key={index} enteredChar={c} deleteCharHandler={(event) => {
               this.deleteCharHandler(event, index);
            }} />)

          })} */}

          {/* <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}

          <input
            type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}


          {/* <h3>New Tasks</h3>
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
          <UserOutput userName="Josh" /> */}
      </div>
    );
  }
}

export default App;
