import "../css/Bar.css"
import "../../index.css"
import "../css/Basic.css"

import Data from "./Data"
import Axis from "./Axis"
import General from "./General"

//Redux
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"


const Bar = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <General/>
           <Data/>
           <Axis/>
           <div className="form-container">
                <div className="form-field-container">
                    <label htmlFor="label">Direct Labels</label>
                    <input type="checkbox" className="checkbox" />
                </div>
           </div>
    
        </div>
    )
}

export default Bar
