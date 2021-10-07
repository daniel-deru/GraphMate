import "../css/Pie.css"
import "../../index.css"
import { useState } from "react"

const Pie = () => {
    const [graphData, setGraphData] = useState({type: "pie"})
    return (
        <div>
            <div className="form-field-container">
                <label htmlFor="title">Enter Your Title</label>
                <input type="text" name="title" placeholder="title" id="" />
            </div>
            <div className="form-field-container">
                <label htmlFor="theme">Choose Your Theme</label>
                <select name="colors" name="theme" id="">
                    <option value="" disabled selected>Select Color Theme</option>
                    <option value="Default">Default</option>
                    <option value="Rainbow">Rainbow</option>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                </select>
            </div>
            <div  className="form-field-container">
                <label htmlFor="labels">Enter Labels</label>
                <textarea name="labels" id="pie-labels" placeholder="Example: Label1, Label2, Label3" cols="30" rows="10"></textarea>
            </div>
            <div  className="form-field-container">
                <label htmlFor="values">Enter Values</label>
                <textarea name="values" id="pie-values" placeholder="Example: 2, 3, 4" cols="30" rows="10"></textarea>
            </div>
            {/* this is specific to pie charts */}
            <div className="form-field-container">
                <label htmlFor="hole">Donut Size</label>
                <input type="number" placeholder="Choose a number between 0 and 99"/>
            </div>
        </div>
    )
}

export default Pie
