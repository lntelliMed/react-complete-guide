const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
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
