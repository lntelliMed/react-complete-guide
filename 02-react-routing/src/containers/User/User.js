import React, { Component } from 'react';

class User extends Component {
  state = {
    userName: ''
  }

  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.userName !== param[1]) {
        this.setState({ userName: param[1] });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <p>This User has the ID: {this.props.match.params.userId}</p>
      </div>
    );
  }
}

export default User;
