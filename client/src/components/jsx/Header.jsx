import "../css/Header.css"

// Redux
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"


// Libs
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import * as htmlToImage from "html-to-image"
import download from "downloadjs"


// Hooks
import { useHistory } from "react-router"
import { useRef, useEffect, useState } from "react"




const Header = () => {
    const [graph, setGraph] = useState("/")
    const selectRef = useRef()

    const history = useHistory()  
    const dispatch = useDispatch()

    const type = useSelector( (state) => state.type)

    const { loadGraph } = bindActionCreators(actionCreators, dispatch)
    
    useEffect(() => {
        reload()
        console.log(selectRef.current.children)
    }, [type, graph])

    const handleRoute = (route) => {
        
        setGraph(route)
        history.push(`${route}`)
        const type = route.substring(1)
        loadGraph(type)
        window.location.reload()
    }

   

    const reload = () => loadGraph(window.location.pathname.substring(1))

    const make_image = () => {
        const graphImage = document.querySelector("#data")
        console.log(graphImage)
        // htmlToImage.toPng(graph).then((dataURL) => {
        //   const image = new Image()
        //   image.src = dataURL
        //   download(dataURL, "node.png")
        //   const doc = new jsPDF('p', 'mm', 'a4')
        //   doc.addImage(dataURL, "png", 10, 78)
        //   doc.save("image")
        // })
      }
    return (
        <header>
            <h1>GraphMate</h1>
            <div>

                <select ref={selectRef} name="chart" id="chart-select" onChange={(e) => handleRoute(e.target.value)}>
                    <option value="/" disabled selected>Select Chart Type</option>
                    <option value="/line">Line Chart</option>
                    <option value="/bar">Bar Chart</option>
                    <option value="/pie">Pie Chart</option>
                    <option value="/histogram">Histogram</option>
                    <option value="/scatter">Scatter Plot</option>
                </select>

                <button type="button">Load Data</button>

                <button type="button" onClick={() => make_image()} >Download</button>

            </div>
        </header>
    )
}

export default Header
