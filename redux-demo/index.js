// Actions
const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake(){
  type: CAKE_ORDERED,
  quantity: 1, 
}

// initial state
const initialState = {
    numOfCakes: 10
}

// reducer
// reducer = (previous_state, action) => next_state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state, //make a copy of state object
                noOfCakes: state.numOfCakes - 1
            }
    
        default:
            state;
    }
}