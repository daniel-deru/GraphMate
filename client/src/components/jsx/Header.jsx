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
    // history is used to navigate to the correct page for the specific graph information
    const history = useHistory() 

    // This is redux to manage and update the state
    const dispatch = useDispatch()

    const type = useSelector( (state) => state.type)
    const data = useSelector((state) => state.data)
    const canUse = useSelector((state) => state.canUse)

    const { loadGraph } = bindActionCreators(actionCreators, dispatch)
    
    // The reload function makes sure the correct graph is being displayed when the user inputs data
    useEffect(() => {
        reload()
    }, [type])
    
    // The handleRoute function controls the route and loads the data to the correct graph
    const handleRoute = (e, path) => {
        const route = e.target.value
        history.push(route)
        if (path == "/") window.location.reload()
        loadGraph(route.substring(1))
        loadData(data)
    }

     // The reload function makes sure the correct graph is being displayed when the user inputs data
    const reload = () => loadGraph(window.location.pathname.substring(1)) 

    return (
        <header>
            <h1>GraphMate</h1>
            <div>
              { canUse && <select name="chart" id="chart-select" onChange={(e) => handleRoute(e, window.location.pathname)}>
                    <option value="/" disabled selected>Select Chart Type</option>
                    <option value="/line">Line Chart</option>
                    <option value="/bar">Bar Chart</option>
                    <option value="/pie">Pie Chart</option>
                    <option value="/histogram">Histogram</option>
                    <option value="/scatter">Scatter Plot</option>
                </select>}

                {/* The download link send the user to the download page to configure their download options */}
                { canUse && <><Link id="btn-download" exact to="/download">Download</Link></> }
            </div>
        </header>
    )
}

// Export the header
export default Header
