import "../../css/Scatter.css"
import "../../css/Basic.css"


// Components
import Data from "../Fields/Data"
import Axis from "../Fields/Axis"
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"

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
