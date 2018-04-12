import * as actionTypes from './actions';

let initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(action.newPerson)
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      };
  }
  return state;
}

export default reducer;
