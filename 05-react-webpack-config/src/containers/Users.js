import React, { Component } from 'react';
import User from '../components/User/User';

class Users extends Component {
    state = {
        users: [
            {id: 1, name: 'Joe' },
            {id: 2, name: 'Tim'}
        ]
    }

    render () {
        return (
            <div>
                <h1>The Users</h1>
                <h2>Meet our awesome users!</h2>
                <User users={this.state.users} />
            </div>
        );
    }
}

export default Users;
