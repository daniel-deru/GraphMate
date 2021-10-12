import { loadData } from "../../state/actionCreators"
import "../css/Basic.css"
import { actionCreators } from "../../state/actionCreators/export"

// Import Hooks
import { useRef, useState } from "react"
import { bindActionCreators } from "redux"
import { useDispatch, useSelector } from "react-redux"

const Basic = () => {
    const [data, setData] = useState()
    const xData = useRef()
    const yData = useRef()
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const graphData = useSelector((state) => state)
    const getData = () => {
        const x = xData.current.value.split(",")
        const y = yData.current.value.split(",")
        loadData({x,y})
        setData(graphData)
        
    }
    return (
        <div className="form-container">
            <div className="form-field-container">
                <button type="button" onClick={() => getData()}>Load Data</button>
            </div>
            <div className="form-field-container">
                <label htmlFor="theme">Choose Your Theme</label>
                <select name="colors" name="theme" id="">
                    <option value="" disabled>Select Color Theme</option>
                    <option value="Default">Default</option>
                    <option value="Rainbow">Rainbow</option>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                </select>
            </div>
            <div  className="form-field-container">
                <label htmlFor="labels">Labels or X</label>
                <textarea ref={xData} name="labels" id="x" placeholder="Example: Label1, Label2, Label3" cols="30" rows="10"></textarea>
            </div>
            <div  className="form-field-container">
                <label htmlFor="values">Values or Y</label>
                <textarea ref={yData} name="values" id="y" placeholder="Example: 2, 3, 4" cols="30" rows="10"></textarea>
            </div>
 
            
        </div>
    )
}

export default Basic
