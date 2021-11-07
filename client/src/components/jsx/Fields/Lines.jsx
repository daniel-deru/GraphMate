import "../../css/Fields.css"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

// This component has all the fields related to line graphs
const Lines = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const data = useSelector((state) => state.data)

    // This function controls all the data for the general fields and updates the 
    // redux store accordingly
    const inputHandler = (e) => {
        let graphData = {...data}
        const value = e.target.value
        switch (e.target.id){
            case "dot-size":
                graphData.dotSize = value
                break
        }
        loadData(graphData)
    }

    return (
        <div>
            <div className="">
                <label htmlFor="dotsize">Choose a Dot Size</label>
                <input type="number" id="dot-size" min="1" placeholder="Example: 2" onChange={(e) => inputHandler(e)}/>
            </div>
        </div>
    )
}

export default Lines
