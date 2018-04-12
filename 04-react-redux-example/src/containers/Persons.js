import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Joe' + Math.floor(Math.random() * 20),
    //         age: Math.floor( Math.random() * 25 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (name, age) => {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                // name: 'Joe' + Math.floor(Math.random() * 20),
                // age: Math.floor(Math.random() * 25)
                name,
                age
            }
            dispatch({
                type: actionTypes.ADD_PERSON,
                newPerson
            });
        },
        onDeletePerson: personId => {
            dispatch({
                type: actionTypes.DELETE_PERSON,
                personId
            });
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
