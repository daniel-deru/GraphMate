// CSS
import "../../css/Fields.css"


// Components
import General from "../Fields/General"
import Cartesian from "../Fields/Cartesian"
import Lines from "../Fields/Lines"

const Scatter = () => {
    return (
        <div className="field-container">
            <General/>
            <Cartesian/>
            <Lines/>
        </div>
    )
}

export default Scatter
