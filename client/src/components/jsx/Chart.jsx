import "../css/Chart.css"
import Plot from "react-plotly.js"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Chart = () => {
    const [data, setData] = useState()
    const type = useSelector( ( state ) => state.type)
    const storeData = useSelector((state) => state.data)
    const layout = {
        width: window.innerWidth/2, 
        title: storeData.title
    }

    console.log(storeData)

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
                mode: mode,
                marker: {
                    colors: storeData.colors,
                    size: storeData.size
                },
                line: {
                    width: storeData.width,
                    colors: storeData.colors
                }
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
                marker: {
                    colors: storeData.colors
                },
                textposition: storeData.textPosition,
                hole: storeData.hole
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
                            showlegend: true,
                            displaylogo: false
                        }}
           />
        </div>
    )
}

export default Chart
