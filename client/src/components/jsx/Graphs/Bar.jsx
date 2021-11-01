//CSS
import "../../css/Fields.css"

// Components
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"
import Bars from "../Fields/Bars"

//Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"


const Bar = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="field-container">
            <General/>
            <Cartesian/>
            <Bars/>
        </div>
    )
}

export default Bar
