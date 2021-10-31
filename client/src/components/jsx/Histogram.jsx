import "../css/Histogram.css"
import "../css/Basic.css"

import Data from "./Data"
import Axis from "./Axis"
import General from "./General"
import Cartesian from "./Cartesian"

const Histogram = () => {
    return (
        <div>
            <General/>
            <Data/>
            <Axis/>
            <Cartesian/>
        </div>
    )
}

export default Histogram
