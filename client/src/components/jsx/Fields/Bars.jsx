// CSS
import "../../css/Fields.css"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

// This component houses all the fields for the bar graph and histogram
const Bars = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const data = useSelector((state) => state.data)

    // This function processes the data for the component and updates the redux store accordingly
    const inputHandler = (e) => {
        let graphData = { ...data }
        const value = e.target.value
        switch (e.target.id){
            case "text-inside":
                graphData.textInside = value.split(",")
                break
        }
        loadData(graphData)
    }

    return (
        <section className="">
            <div className="">
                <label htmlFor="text">Text Inside</label>
                <input type="text" id="text-inside" placeholder="use a comma to separate the values" onChange={(e) => inputHandler(e)}/>
            </div>
        </section>
    )
}

export default Bars
