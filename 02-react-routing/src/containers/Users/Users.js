import React, { Component } from 'react';
import User from '../User/User';
import './Users.css';
import { Route, Link } from 'react-router-dom';

class Users extends Component {
    state = {
        users: [
            { id: 1, name: 'Joe Smith' },
            { id: 2, name: 'Johny White' }
        ]
    }
    render() {
        return (
            <div>
                <h1>The Users Page</h1>
                <section className="Users">
                    {
                        this.state.users.map(user => {
                            return (
                                <Link
                                    key={user.id}
                                    to={{
                                        pathname: this.props.match.url + '/' + user.id,
                                        search: '?name=' + user.name
                                    }}>
                                    <article className="User">{user.name}</article>
                                </Link>
                            );
                        })
                    }
                </section>
                <Route path={this.props.match.url + '/:userId'} component={User} />
            </div>
        );
    }
}

export default Users;
