import "../css/Pie.css"
import "../../index.css"
import "../css/Basic.css"
import { useState } from "react"

import Data from "./Data"
import General from "./General"

// Redux
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useDispatch, useSelector } from "react-redux"

const Pie = () => {
    // const [graphData, setGraphData] = useState({type: "pie"})
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    return (
        <div id="pie">
            <General/>
            <Data/>
            <div className="custom-container">
                <div className="form-field-container hole">
                    <label htmlFor="hole">Donut Size</label>
                    <input type="number" max="99" min="0" placeholder="Choose a number between 0 and 99" onChange={(e) => loadData({...data, hole: ( parseInt(e.target.value) / 100 )})}/>
                </div>
                <div className="form-field-container text-pos">
                    <label htmlFor="textposition">Text Position</label>
                    <select name="textposition" id="" onChange={(e) => loadData({...data, textPosition: e.target.value})}>
                        <option value="" disabled selected>Select Position</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                </div>
            </div>
            
        </div>
    )
}

export default Pie
