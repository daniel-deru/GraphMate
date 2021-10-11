import "../css/Bar.css"
import "../../index.css"

import Basic from "./Basic"

const Bar = () => {
    return (
        <div>
           <Basic/>
           <div className="form-container">
                <div className="form-field-container">
                    <label htmlFor="width">Width</label>
                    <select name="width" id="">
                        <option value="" disabled>Select Width</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="form-field-container">
                    <label htmlFor="label">Direct Labels</label>
                    <input type="checkbox" className="checkbox" />
                </div>
           </div>
    
        </div>
    )
}

export default Bar
