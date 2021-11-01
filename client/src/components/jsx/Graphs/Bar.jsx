import "../../css/Bar.css"
import "../../../index.css"
import "../../css/Basic.css"

// Components
import Data from "../Fields/Data"
import Axis from "../Fields/Axis"
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"

//Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"


const Bar = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <General/>
           <Data/>
           <Axis/>
           <Cartesian/>  
        </div>
    )
}

export default Bar
