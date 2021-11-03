// import "../../css/Cartesian.css"
import "../../css/Fields.css"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

const Cartesian = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const data = useSelector((state) => state.data)

// These are the ids used in the switch statement for reference
// showlines
// showgrid
// width
// tick-angle
// x-title-color
// x-title-size
// y-title-color
// y-title-size
// x-title
// y-title

    const inputHandler = (e) => {
        let graphData = {...data}
        const value = e.target.value
        const checked = e.target.checked
        switch (e.target.id) {
            case "showlines":
                graphData.showLines = checked
                break
            case "showgrid":
                graphData.showGrid = checked
                break
            case "width":
                graphData.width = (value / 20)
                break
            case "tick-angle": 
                graphData.tickAngle = (value/100*360)
                break
            case "x-title-color":
                graphData.xTitleColor = value
                break
            case "x-title-size":
                graphData.xTitleSize = value
                break
            case "y-title-color":
                graphData.yTitleColor = value
                break
            case "y-title-size":
                graphData.yTitleSize = value
                break
            case "x-title":
                graphData.xTitle = value
                break
            case "y-title":
                graphData.yTitle = value
                break
            case "x-scale-color":
                graphData.xScaleColor = value
                break
            case "x-scale-size":
                graphData.xScaleSize = value
                break
            case "y-scale-color":
                graphData.yScaleColor = value
                break
            case "y-scale-size":
                graphData.yScaleSize = value
                break

        }
        loadData(graphData)
        console.log(graphData)
    }

    return (
        <section className="">
            <div className="">
                <label htmlFor="x-name">X-Axis Title</label>
                <input type="text" id="x-title" placeholder="Example: My X-axis" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="y-name">Y-Axis Title</label>
                <input type="text" id="y-title" placeholder="Example: My Y-axis" onChange={(e) => inputHandler(e)}/>
            </div>


            <div className="">
                <label htmlFor="xtitlecolor">X-Axis Title Color</label>
                <input type="text" name="xtitlecolor" id="x-title-color" placeholder="Example: #ff0045" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="ytitlecolor">Y-Axis Title Color</label>
                <input type="text" name="ytitlecolor" id="y-title-color"  placeholder="Example: #ff0045" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="xtitlesize">X-Axis Title Size</label>
                <input type="text" name="xtitlesize" id="x-title-size" placeholder="Example: 2" onChange={(e) => inputHandler(e)}/>
            </div>

  

            <div>
                <label htmlFor="ytitlesize">Y-Axis Title Size</label>
                <input type="text" name="ytitlesize" id="y-title-size"  placeholder="Example: 2" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="">X Scale Color</label>
                <input type="text" placeholder="Example: green" id="x-scale-color" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="">X Scale Size</label>
                <input type="text" placeholder="Example: 5" id="x-scale-size" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="">Y Scale Color</label>
                <input type="text" placeholder="Example: green" id="y-scale-color" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="">Y Scale Size</label>
                <input type="text"placeholder="Example: 5" id="y-scale-size" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="showlines">Show Lines</label>
                <input type="checkbox" id="showlines" name="showlines" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="showgrid">Show Grid</label>
                <input type="checkbox" name="showgrid" id="showgrid" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="width">Width</label>
                <input type="number" min="1" max="20"  name="width" id="width" placeholder="Example: 70" onChange={(e) => inputHandler(e)}/>
            </div>
            
            <div className="">
                <label htmlFor="tickangle">Tick Angle</label>
                <input type="range" min="0" max="100" name="tickangle" id="tick-angle" onChange={(e) => inputHandler(e)}/>
            </div>
            
        </section>
    )
}

export default Cartesian
