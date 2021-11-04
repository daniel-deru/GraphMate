//CSS
import "../css/Chart.css"

// Third party Libs
import Plot from "react-plotly.js"

// Redux
import { useSelector } from "react-redux"

// Hooks
import { useEffect, useState } from "react"

const Chart = () => {
    const [data, setData] = useState()
    const type = useSelector( ( state ) => state.type)
    const storeData = useSelector((state) => state.data)

    const layout = {
        width: window.innerWidth/2,
        title: storeData.title,
        titlefont: {
            color: storeData.titleColor,
            size: storeData.titleSize
        },
        xaxis: {
            title: storeData.xTitle,
            titlefont: {
                color: storeData.xTitleColor,
                size: storeData.xTitleSize
            },
            tickfont: {
                color: storeData.xScaleColor,
                size: storeData.xScaleSize
            },
            zeroline: false,
            showgrid: storeData.showGrid,
            tickangle: storeData.tickAngle,
        },
        yaxis: {
            title: storeData.yTitle,
            titlefont: {
                color: storeData.yTitleColor,
                size: storeData.yTitleSize
            },
            tickfont: {
                color: storeData.yScaleColor,
                size: storeData.yScaleSize
            },
            showline: storeData.showLines
        }
    }

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
                histnorm: storeData.histNorm,
                width: storeData.width,
                text: storeData.textInside,
                textfont: {
                    color: storeData.titleColor,
                    size: storeData.titleSize
                },
                textposition: "auto",
                line: {
                    width: storeData.width,
                    color: storeData.colors,
                    dash: storeData.dash
                },
                marker: {
                    color: storeData.colors,
                    size: storeData.dotSize,
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
                textinfo: storeData.pieText,
                hole: storeData.hole
            }
        ]
        return data
    }

    useEffect(() => {
        const data = type == "pie" ? createPie() : createGraph()
        if(storeData.colors.length == 1){
            storeData.colors = storeData.colors[0]
        }
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
