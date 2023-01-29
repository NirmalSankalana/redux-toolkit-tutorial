// importing redux and createStore()
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreaters = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// Actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// initial state
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamStates = {
  numOfIcecreams: 20,
};

// reducer
// reducer = (previous_state, action) => next_state
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamStates, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload,
      };

    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };

//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };

//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams + action.payload,
//       };

//     default:
//       return state;
//   }
// };

// creating redux store

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});
const store = createStore(rootReducer);
console.log("Getting curren state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state: ", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
// store.dispatch(restockCake(5));

const actions = bindActionCreaters(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.restockCake(2);

actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(10);
unsubscribe();
