const redux = require("redux");
const produce = require("immer").produce;
// initial state
const initialState = {
  name: "Vishwa",
  address: {
    street: "4/1 B, Morupola, Gampaha",
    city: "Boston",
    state: "MA",
  },
};

// actions
const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state, // to name ramains unaffected spread the current state
      //     address: {
      //       ...state.address, // to city andd state remain unaffected spread the address
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());
const unsubsribe = store.subscribe(() => {
  console.log("Update State :", store.getState());
});

store.dispatch(updateStreet("189, Kollupitiya, Colombo 3"));
unsubsribe();
