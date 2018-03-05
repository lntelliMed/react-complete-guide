import React, { Component } from 'react';
import classes from './App.css';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'a1', name: 'John', age: 25 },
        { id: 'a2', name: 'Mike', age: 28 },
        { id: 'a3', name: 'Hana', age: 29 }
      ],
      username: 'SuperUser',
      showPersons: false,
      userInput: ''
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons:  persons });
  }

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
    console.log('[App.js] Inside render()');
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    let persons = null;
    if(this.state.showPersons){
      persons = (
                  <Persons persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
                );
    }

    return (
        <div className={classes.App}>
            < Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
            {persons}
            <hr />
            <input
              type="text"
              onChange={this.inputChangedHandler}
              value={this.state.userInput} />
            <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length} />
            {charList}
        </div>
    );
  }
}

export default App;
