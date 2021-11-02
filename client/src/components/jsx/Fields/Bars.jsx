// CSS
import "../../css/Fields.css"

// Redux
import { actionCreators } from "../../../state/actionCreators/export"
import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"

const Bars = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const data = useSelector((state) => state.data)

    const inputHandler = (e) => {
        let graphData = { ...data }
        const value = e.target.value
        switch (e.target.id){
            case "text-inside":
                graphData.textInside = value.split(",")
                break
        }
        loadData(graphData)
        console.log(graphData)
    }

    return (
        <section className="">
            <div className="">
                <label htmlFor="text">Text Inside</label>
                <input type="text" id="text-inside" placeholder="use a comma to separate the values" onChange={(e) => inputHandler(e)}/>
            </div>
        </section>
    )
}

export default Bars
