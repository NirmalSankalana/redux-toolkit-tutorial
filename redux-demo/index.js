// importing redux and createStore()
const redux = require("redux");
const createStore = redux.createStore;

// Actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// initial state
const initialState = {
  numOfCakes: 10,
};

// reducer
// reducer = (previous_state, action) => next_state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state, //make a copy of state object to not affect state of other objects
        noOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state, //make a copy of state object
        noOfCakes: state.numOfCakes + action.payload,
      };

    default:
      state;
  }
};

// creating redux store
const store = createStore(reducer);
console.log("Getting curren state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state: ", store.getState())
);

store.dispatch(orderCake(1));
store.dispatch(orderCake(2));
store.dispatch(orderCake(3));
store.dispatch(restockCake(3));
store.dispatch(restockCake(7));
unsubscribe();
