import "../css/Scatter.css"
import "../css/Basic.css"


// Components
import Data from "./Data"
import Axis from "./Axis"
import General from "./General"
import Cartesian from "./Cartesian"

const Scatter = () => {
    return (
        <div>
            <General/>
            <Data/>
            <Axis/>
            <Cartesian/>
        </div>
    )
}

export default Scatter
