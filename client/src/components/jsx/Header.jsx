import "../css/Header.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useRef } from "react"

const Header = () => {
    const history = useHistory()
    const selectRef = useRef()
    
    const handleRoute = (route) => {
        history.push(`${route}`)
        console.log(selectRef)
        Array.from(selectRef.current.children).forEach( (child, i) => {
            if (window.location.pathname === child.value){
                selectRef.current.currentIndex = child.index
            }
        })
        // console.log(selectRef)
        // console.log(window.location.pathname)
        
    }
    return (
        <header>
            <h1>Charter</h1>
            {/* <div id="control-container"> */}
                <select ref={selectRef} name="chart" id="chart-select" onChange={(e) => handleRoute(e.target.value)}>
                    <option value="/" disabled>Select Chart Type</option>
                    <option value="/line">Line Chart</option>
                    <option value="/bar">Bar Chart</option>
                    <option value="/pie">Pie Chart</option>
                    <option value="/histogram">Histogram</option>
                    <option value="/scatter">Scatter Plot</option>
                </select>
                <button type="button">Download</button>
            {/* </div> */}
      
        </header>
    )
}

export default Header
