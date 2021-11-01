// CSS
import "../../css/Line.css"
import "../../css/Basic.css"

// Components
import Data from "../Fields/Data"
import Axis from "../Fields/Axis"
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

const Line = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData} = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <General/>
            <Data/>
            <Axis/>
            <Cartesian/>
            <div className="form-field-container">
                <label htmlFor="dash">Choose a Line Type</label>
                <select name="dash" id="" onChange={(e) => loadData({...data, dash: e.target.value})}>
                    <option value="" disabled selected>Choose a Line Type</option>
                    <option value="dash">Dash</option>
                    <option value="solid">Solid</option>
                    <option value="dot">Dot</option>
                    <option value="dashdot">DashDot</option>
                </select>
            </div>
        </div>
    )
}

export default Line
