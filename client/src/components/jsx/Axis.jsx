import React from 'react'
import "../css/Axis.css"

const Axis = () => {
    const graph = window.location.pathname
    return (
        <div style={{display: "flex"}}>
            {graph != "/pie" ?  <div className="form-field-container">
                                    <label htmlFor="x-name">X-Axis Name</label>
                                    <input type="text" />
                                </div>
            : null}

            {graph != "/pie" ?  <div className="form-field-container">
                                    <label htmlFor="y-name">Y-Axis Name</label>
                                    <input type="text" />
                                </div>
            : null }
        </div>
    )
}

export default Axis
