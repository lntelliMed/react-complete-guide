import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
      // let id = 2;
      // let resultsCopy = [...state.results];
      // resultsCopy.splice(2, 1);
      // return {
      //     ...state,
      //     results: resultsCopy
      // }
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.resultId)
      }
  }
  return state;
};

export default reducer;