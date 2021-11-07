
// Imports required to open the redux store
import { createStore, applyMiddleware } from "redux"
import redusers from "./reducers/combinedReducers"
import thunk from "redux-thunk" 

// create the store and export is to be used in the root app.
// the reducers or controllers are responsible for interaction with the store
// The empty object is the store itself
// the middleware is for asyncronious requests
export const store = createStore(
    redusers,
    {},
    applyMiddleware(thunk)
)