import "../css/Chart.css"
import Plot from "react-plotly.js"

const Chart = () => {
    return (
        <div>
            <Plot
                data={[
                {
                    values: [19, 26, 55],
                    labels: ['Residential', 'Non-Residential', 'Utility'],
                    type: 'pie',
                    hole: 0.1
                }
                ]}
                layout={ {width: 620, height: 340, title: 'A Fancy Plot'} }
           />
        </div>
    )
}

export default Chart
