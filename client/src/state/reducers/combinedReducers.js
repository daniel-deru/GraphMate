// The required imports
import { combineReducers } from "redux"
import dataReduser from "./dataReduser"
import typeReduser from "./typeReduser"
import deviceReducer from "./deviceReducer"

// combine all the reducers before they are added to the store
const redusers = combineReducers({
    data: dataReduser,
    type: typeReduser,
    canUse: deviceReducer
})

// export the reducers
export default redusers