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
    const type = useSelector( (state) => state.type)
    const { loadGraph, loadData } = bindActionCreators(actionCreators, dispatch)
    
    useEffect(() => {
        Array.from(selectRef.current.children).forEach( (child, i) => {
            if (window.location.pathname === child.value){
                selectRef.current.selectedIndex = i
            }
        })
        handleRoute(selectRef.current.value)
    }, [type])

    const handleRoute = (route) => {
        history.push(`${route}`)
        const type = route.substring(1)
        loadGraph(type)
    }

    // const getData = () => {
    //     if (xData.current.value && yData.current.value){
    //         const x = xData.current.value.split(",")
    //         const y = yData.current.value.split(",")
    //         loadData({x,y})
    //     }
    // }
    return (
        <header>
            <h1>GraphMate</h1>
            <div>

                <select ref={selectRef} name="chart" id="chart-select" onChange={(e) => handleRoute(e.target.value)}>
                    <option value="/" disabled>Select Chart Type</option>
                    <option value="/line">Line Chart</option>
                    <option value="/bar">Bar Chart</option>
                    <option value="/pie">Pie Chart</option>
                    <option value="/histogram">Histogram</option>
                    <option value="/scatter">Scatter Plot</option>
                </select>

                <button type="button">Load Data</button>

                <button type="button">Download</button>

            </div>
        </header>
    )
}

export default Header
