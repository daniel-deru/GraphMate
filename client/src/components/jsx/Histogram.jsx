import "../css/Histogram.css"
import "../css/Basic.css"

import Data from "./Data"
import Axis from "./Axis"
import General from "./General"

const Histogram = () => {
    return (
        <div>
            <General/>
            <Data/>
            <Axis/>
        </div>
    )
}

export default Histogram
