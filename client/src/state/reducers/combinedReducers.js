import { combineReducers } from "redux"
import dataReduser from "./dataReduser"
import typeReduser from "./typeReduser"
import deviceReducer from "./deviceReducer"


const redusers = combineReducers({
    data: dataReduser,
    type: typeReduser,
    canUse: deviceReducer
})

export default redusers