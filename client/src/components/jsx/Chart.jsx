import "../css/Chart.css"
import Plot from "react-plotly.js"

const Chart = () => {
    return (
        <div>
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 720, height: 440, title: 'A Fancy Plot'} }
           />
        </div>
    )
}

export default Chart
