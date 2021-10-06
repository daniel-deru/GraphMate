import "../css/Header.css"
import { FaBars } from "react-icons/fa"

const Header = () => {
    return (
        <header>
            <h1>Charter</h1>
            {/* <div id="control-container"> */}
                <select name="chart" id="chart-select">
                    <option value="" disabled>Select Chart Type</option>
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                    <option value="histogram">Histogram</option>
                    <option value="scatter">Scatter Plot</option>
                </select>
                <button type="button">Download</button>
            {/* </div> */}
      
        </header>
    )
}

export default Header
