// CSS
import "../../css/Fields.css"

import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"
import Bars from "../Fields/Bars"

const Histogram = () => {
    return (
        <div className="field-container">
            <General/>
            <Cartesian/>
            <Bars/>
        </div>
    )
}

export default Histogram
