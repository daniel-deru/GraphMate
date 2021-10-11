import { combineReducers } from "redux"
import dataReduser from "./dataReduser"
import typeReduser from "./typeReduser"


const redusers = combineReducers({
    data: dataReduser,
    type: typeReduser
})

export default redusers