import "../css/Axis.css"

// Redux
import { actionCreators } from "../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

const Axis = () => {
    const graph = window.location.pathname
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)


    const { loadData } = bindActionCreators(actionCreators, dispatch)

    return (
        <div style={{display: "flex"}}>
            {graph != "/pie" && <div className="form-field-container">
                                    <label htmlFor="x-name">X-Axis Name</label>
                                    <input type="text" onChange={(e) => loadData({...data, x_name: e.target.value})}/>
                                </div>
            }

            {graph != "/pie" && <div className="form-field-container">
                                    <label htmlFor="y-name">Y-Axis Name</label>
                                    <input type="text" onChange={(e) => loadData({...data, y_name: e.target.value})}/>
                                </div>
            }
        </div>
    )
}

export default Axis
