import "../css/Chart.css"
import Plot from "react-plotly.js"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Chart = () => {
    const [data, setData] = useState()
    const type = useSelector( ( state ) => state.type)
    
    const layout = {width: window.innerWidth/2, title: 'A Fancy Plot'}

    

    const createGraph = () => {
        const data = [
            {
                y: [19, 26, 55],
                x: [1, 2, 3],
                type: type,
                name: "other"
            }
        ]
        return data
    }

    const createPie = () => {
        const data = [
            {
                values: [19, 26, 55],
                labels: [1, 2, 3],
                type: type,
                name: "pie"
            }
        ]
        return data
    }

    

    useEffect(() => {
        const data = type == "pie" ? createPie() : createGraph()
        setData(data)
        console.log(data)
    }, [type])
  
    
    return (
        <div>
            <Plot
                data={data}
                layout={layout}
                config={{editable: true}}
           />
        </div>
    )
}

export default Chart
