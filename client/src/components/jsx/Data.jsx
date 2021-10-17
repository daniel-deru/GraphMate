import "../css/Basic.css"
import { actionCreators } from "../../state/actionCreators/export"

// Import Hooks
import { useRef, useState } from "react"
import { bindActionCreators } from "redux"
import { useDispatch, useSelector } from "react-redux"

const Data = () => {
    const xData = useRef()
    const yData = useRef()
    const dispatch = useDispatch()
    const grab = useSelector((state) => state.data)
    
    const { loadData } = bindActionCreators(actionCreators, dispatch)

    const readData = (e) => {
        // console.log(e.target.id)
        // console.log(e.target.value)
    }

    return (
        <div className="form-container">
            <div  className="form-field-container">
                <label htmlFor="labels">Labels or X</label>
                <textarea ref={xData} name="labels" id="x" placeholder="Example: Label1, Label2, Label3" cols="30" rows="10" onChange={(e) => readData(e)}></textarea>
            </div>
            <div  className="form-field-container">
                <label htmlFor="values">Values or Y</label>
                <textarea ref={yData} name="values" id="y" placeholder="Example: 2, 3, 4" cols="30" rows="10" onChange={(e) => readData(e)}></textarea>
            </div>
        </div>
    )
}

export default Data
