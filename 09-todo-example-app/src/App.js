import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Todos from './containers/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Switch>
          <Route path="/todos" component={Todos} />
          <Redirect to="/todos" />
        </Switch>
      </div>
    );
  }
}

export default App;
