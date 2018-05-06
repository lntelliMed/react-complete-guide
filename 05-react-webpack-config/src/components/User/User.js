import React from 'react';
import * as classes from './User.css';

const user = (props) => {
    return (
    <div className={classes.User} >
      {props.users.map(user => {
        return (
          <p key={user.id}>{user.name}</p>
        )
      })}
    </div>
  )
};

export default user;
