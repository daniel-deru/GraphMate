import "../css/Chart.css"
import Plot from "react-plotly.js"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Chart = () => {
    const [data, setData] = useState()
    const type = useSelector( ( state ) => state.type)
    const storeData = useSelector((state) => state.data)
    const layout = {width: window.innerWidth/2, title: 'Enter Your Title here'}

    const createGraph = () => {
        let mode = null
        switch(window.location.pathname){
            case "/scatter": mode = "markers"
            break
            case "/line": mode = "lines+markers"
            break
            default: mode = null
        }
        const data = [
            {
                y: storeData.y,
                x: storeData.x,
                type: type,
                mode: mode
            }
        ]
        return data
    }

    const createPie = () => {
        const data = [
            {
                values: storeData.y,
                labels: storeData.x,
                type: type,
            }
        ]
        return data
    }

    useEffect(() => {
        const data = type == "pie" ? createPie() : createGraph()
        setData(data)
    }, [type, storeData])

    
    return (
        <div>
            <Plot
                data={data}
                layout={layout}
                config={{   scrollZoom: false,
                            staticPlot: true,
                            displayModeBar: false,
                        }}
           />
        </div>
    )
}

export default Chart
