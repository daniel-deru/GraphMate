import { createStore, applyMiddleware } from "redux"
import redusers from "./reducers/combinedReducers"
import thunk from "redux-thunk" 

export const store = createStore(
    redusers,
    {},
    applyMiddleware(thunk)
)