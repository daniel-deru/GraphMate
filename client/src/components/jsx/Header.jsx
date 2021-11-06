import "../css/Header.css"

// Redux
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"


// Hooks
import { useEffect } from "react"

// Router
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { loadData } from "../../state/actionCreators"


const Header = () => {
    const history = useHistory()  
    const dispatch = useDispatch()

    const type = useSelector( (state) => state.type)
    const data = useSelector((state) => state.data)

    const { loadGraph } = bindActionCreators(actionCreators, dispatch)
    
    useEffect(() => {
        reload()
    }, [type])
    
    const handleRoute = (e, path) => {
        const route = e.target.value
        history.push(route)
        if (path == "/") window.location.reload()
        loadGraph(route.substring(1))
        loadData(data)
    }

    const reload = () => loadGraph(window.location.pathname.substring(1)) 

    return (
        <header>
            <h1>GraphMate</h1>
            <div>
                <select name="chart" id="chart-select" onChange={(e) => handleRoute(e, window.location.pathname)}>
                    <option value="/" disabled selected>Select Chart Type</option>
                    <option value="/line">Line Chart</option>
                    <option value="/bar">Bar Chart</option>
                    <option value="/pie">Pie Chart</option>
                    <option value="/histogram">Histogram</option>
                    <option value="/scatter">Scatter Plot</option>
                </select>
                <Link id="btn-download" exact to="/download">Download</Link>

            </div>
        </header>
    )
}

export default Header
