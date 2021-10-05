import "../css/Header.css"
import { FaBars } from "react-icons/fa"

const Header = () => {
    return (
        <header>
            <h1>Charter</h1>
            <select name="chart" id="chart-select">
                <option value="" disabled>Select Chart Type</option>
                
            </select>
            <FaBars id="menu-icon"/>
        </header>
    )
}

export default Header
