import "../../css/Cartesian.css"

const Cartesian = () => {
    return (
        <div>
            <div className="form-field-container">
                <label htmlFor="showlines">Show Lines</label>
                <input type="checkbox" name="showlines" id="" />
            </div>

            <div className="form-field-container">
                <label htmlFor="showgrid">Show Grid</label>
                <input type="checkbox" name="showgrid" id="" />
            </div>

            <div className="form-field-container">
                <label htmlFor="width">Width</label>
                <input type="number" min="1"  name="width" id=""/>
            </div>
            
            <div className="form-field-container">
                <label htmlFor="tickangle">Tick Angle</label>
                <input type="range" name="tickangle" id="" />
            </div>

            <div className="form-field-container">
                <label htmlFor="xtitlecolor">X-Axis Title Color</label>
                <input type="text" name="xtitlecolor" id="" />
                <label htmlFor="xtitlesize">X-Axis Title Size</label>
                <input type="text" name="xtitlesize" id="" />
            </div>

            <div className="form-field-container">
                <label htmlFor="ytitlecolor">Y-Axis Title Color</label>
                <input type="text" name="ytitlecolor" id="" />
                <label htmlFor="ytitlesize">Y-Axis Title Size</label>
                <input type="text" name="ytitlesize" id="" />
            </div>


        </div>
    )
}

export default Cartesian
