import "../css/Pie.css"
import "../../index.css"
import { useState } from "react"

import Basic from "./Basic"

const Pie = () => {
    const [graphData, setGraphData] = useState({type: "pie"})
    return (
        <div>
            <Basic/>
            {/* this is specific to pie charts */}
            <div className="form-field-container">
                <label htmlFor="hole">Donut Size</label>
                <input type="number" placeholder="Choose a number between 0 and 99"/>
            </div>
        </div>
    )
}

export default Pie
