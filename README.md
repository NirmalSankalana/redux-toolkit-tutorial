# redux-toolkit-tutorial

Source code for redux toolkit tutorial which I [followed:](https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3)

## Definitions

#### 1. Store - Holds the state of your application

There is only one `store` for a application. It holds the spplication state.

1. Store allows to access the state which it holds via `getState()` method.
2. Store allows to update the state via `dispatch(state)` method.
3. Store allows to register listners via `subscribe(listner)` method.
4. Store Handle the usregistering of listners via the function returned by `subscribe(listner)` method.

#### 2. Action - an plain JS object that describes what happens in the application

Actions is the only way your application can interact with the store. Actions carry some information from your app to the redux store. They have the `type` property which describes something that happens to the application.

#### 3. Reducer - which describes the action and decides how to update the state

Specify how the app's state changes in response to actions sent to the store. Reducer function that accepts state and action as arguments, and returns the next state of the applicaion.

```
reducer = (previous_state, action) => next_state
```

## Three Principles

1. The global state of your application is stored as an object inside a single store.
2. The only way to change the state is to dispatch an action(Do not allow to update the state directly)
3. To specify how the space tree is updated based on action write pure reducers

![Three principle's overview](./img//img_1.png)
