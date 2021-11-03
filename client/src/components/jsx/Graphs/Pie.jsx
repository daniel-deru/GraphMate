// CSS
import "../../css/Fields.css"
import { useState } from "react"


import General from "../Fields/General"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useDispatch, useSelector } from "react-redux"

const Pie = () => {
    // const [graphData, setGraphData] = useState({type: "pie"})
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    return (
        <div id="pie" className="field-container">
            <General/>
            <section>
                <div className="hole">
                    <label htmlFor="hole">Donut Size</label>
                    <input type="number" max="99" min="0" placeholder="Choose a number between 0 and 99" onChange={(e) => loadData({...data, hole: ( parseInt(e.target.value) / 100 )})}/>
                </div>
                <div className="text-pos">
                    <label htmlFor="textposition">Text Position</label>
                    <select name="textposition" id="" onChange={(e) => loadData({...data, textPosition: e.target.value})}>
                        <option value="" disabled selected>Select Position</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="display-text">Display Text</label>
                    <select name="textposition" id="" onChange={(e) => loadData({...data, pieText: e.target.value})}>
                        <option value="" disabled selected>Select Text Display</option>
                        <option value="percent">Percent</option>
                        <option value="label+percent">Label and Percent</option>
                    </select>
                </div>
            </section>
            
        </div>
    )
}

export default Pie
