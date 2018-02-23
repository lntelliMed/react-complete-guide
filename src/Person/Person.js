import React from 'react';

const person = () => {
  return (
    <div>
      <p>This is a Person who is {Math.floor(Math.random() * 30)} years old!</p>
    </div>
  );
}

export default person;
