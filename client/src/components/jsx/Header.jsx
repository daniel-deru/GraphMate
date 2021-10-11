import "../css/Header.css"
import { useHistory } from "react-router"
import { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"



const Header = () => {
    const history = useHistory()
    const selectRef = useRef()
    const dispatch = useDispatch()
    // const type = useSelector( (state) => state.type)
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    
    useEffect(() => {
        Array.from(selectRef.current.children).forEach( (child, i) => {
            if (window.location.pathname === child.value){
                selectRef.current.selectedIndex = i
            }
        })
    }, [])

    const handleRoute = (route) => {
        history.push(`${route}`)
        const type = route.substring(1)
        loadData(type)
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
