import "../../css/Histogram.css"
import "../../css/Basic.css"

import Data from "../Fields/Data"
import Axis from "../Fields/Axis"
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"

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
