//CSS
import "../css/Chart.css"

// Third party Libs
import Plot from "react-plotly.js"

// Redux
import { useSelector } from "react-redux"

// Hooks
import { useEffect, useState } from "react"


// The chart component 
const Chart = () => {
    // react state and redux state used together to update the graph when data is updated
    const [data, setData] = useState()
    const type = useSelector( ( state ) => state.type)
    const storeData = useSelector((state) => state.data)

    // this object controls general settings about the graph like base colors and sizes
    const layout = {
        paper_bgcolor: storeData.bgColor,
        plot_bgcolor: storeData.bgColor,
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

    // This controls the data for all the graphs except the pie chart
    // The switch is used to create the line and scatter graphs respectively
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

    // This creates the pie chart
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

    // the useEffect determines the current graph selected and updates accordingly
    // It also checks where there is one or more colors in the redux store to update the chart accordingly
    useEffect(() => {
        const data = type == "pie" ? createPie() : createGraph()
        if(storeData.colors.length == 1){
            storeData.colors = storeData.colors[0]
        }
        console.log(storeData)
        setData(data)
    }, [type])

    // This renders the actual graph using the data and layout objects created above
    return (
        <div id="data">
            <Plot
                id="chart"
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
