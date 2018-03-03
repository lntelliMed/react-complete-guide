import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hello, there from React!</h1>
      <p className={assignedClasses.join(' ')} >Below is the list of people:</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
      </div>
  );
}

export default cockpit;