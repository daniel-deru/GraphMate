// CSS
import "../../css/Fields.css"


// Components
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"
import Bars from "../Fields/Bars"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

// The histogram data is controlled with this component 
// This component has an extra custom field for the type of histogram. This requires redux to be managed in this component
const Histogram = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const data = useSelector((state) => state.data)

    const inputHandler = (e) => {
        const value = e.target.value
        let graphData = data
        switch(e.target.id){
            case "histnorm":
                graphData.histNorm = value
                break
        }
        loadData(graphData)
    }
    return (
        <div className="field-container">
            <General/>
            <Cartesian/>
            <Bars/>
            <section>
                <div>
                    <label htmlFor="Norm">Norm of the Histogram</label>
                    <select name="Norm" id="histnorm" onChange={(e) => inputHandler(e)}>
                        <option value="" selected disabled>Choose The Norm</option>
                        <option value="count">Count</option>
                        <option value="percent">Percent</option>
                        <option value="density">Density</option>
                        <option value="probability">Probability</option>
                        <option value="probability density">Probability Density</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default Histogram
