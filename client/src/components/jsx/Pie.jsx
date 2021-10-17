import "../css/Pie.css"
import "../../index.css"
import "../css/Basic.css"
import { useState } from "react"

import Data from "./Data"
import General from "./General"

const Pie = () => {
    const [graphData, setGraphData] = useState({type: "pie"})
    return (
        <div>
            <General/>
            <Data/>
            
            <div className="form-field-container">
                <label htmlFor="hole">Donut Size</label>
                <input type="number" placeholder="Choose a number between 0 and 99"/>
            </div>
        </div>
    )
}

export default Pie
