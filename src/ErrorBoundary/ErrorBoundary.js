import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hassError: false,
    errorMessage: ''
  }

  componenetDidCatch = (error, info) => {
    this.setState({
      hassError: true,
      errorMessage: error
    });
  }

  render () {
    if(this.state.hassError){
      return <p>{this.state.errorMessage}</p>;

    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
