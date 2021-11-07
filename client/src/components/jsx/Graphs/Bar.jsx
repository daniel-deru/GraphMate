//CSS
import "../../css/Fields.css"

// Components
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"
import Bars from "../Fields/Bars"

// The bar chart component is made of the different data field components with no custom fields
const Bar = () => {
    return (
        <div className="field-container">
            <General/>
            <Cartesian/>
            <Bars/>
        </div>
    )
}

export default Bar
