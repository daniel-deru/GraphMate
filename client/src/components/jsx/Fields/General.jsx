// import "../../css/General.css"
import "../../css/Fields.css"


// Redux
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../../state/actionCreators/export'

// Hooks
import { useState } from "react"

const General = () => {
    const data = useSelector((state) => state.data)
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)

    const inputHandler = (e) => {
        let graphData = {...data}
        const value = e.target.value
        const graphType = window.location.pathname
        switch (e.target.id) {
            case "title": 
                graphData.title = value
                break
            case "graph-color": 
                graphData.colors = window.location.pathname == "/line" ? value : value.split(",")
                break
            case "title-color":
                graphData.titleColor = value
                break
            case "title-size":
                graphData.titleSize = value
                break
            case "x-values":
                if(graphType == "/histogram"){
                   if (value) {
                    graphData.x = value.split(",")
                    graphData.y = null
                   } else {
                    graphData.x = null
                   }
                } else {
                    graphData.x = value.split(",")
                }
                break
            case "y-values":
                if(graphType == "/histogram"){
                    if (value) {
                     graphData.y = value.split(",")
                     graphData.x = null
                    } else {
                     graphData.y = null
                    }
                 } else {
                     graphData.y = value.split(",")
                 }
                break
        }
        loadData(graphData)
        console.log(graphData)
    }
    return (
        <section id="general" className="">

            <div className="" >
                <label htmlFor="Title">Enter Your Title</label>
                <input type="text" id="title" placeholder="My Title" name="Title"  onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="" >
                <label htmlFor="theme">Choose Your Graph Color</label>
                <input type="text" id="graph-color" placeholder="blue, #f9f9f9, red" name="color" onChange={(e) => inputHandler(e)}/>
            </div>

            <div className="">
                <label htmlFor="titlecolor">Title Color</label>
                <input type="text" id="title-color" name="titlecolor" placeholder="Example: #45ff00" onChange={(e) => inputHandler(e)}/>
            </div>

            <div>
                <label htmlFor="titlesize">Title Size</label>
                <input type="text" id="title-size" name="titlesize" placeholder="Example: 2" onChange={(e) => inputHandler(e)}/>
            </div>
            <div  className="">
                <label htmlFor="labels">Labels or X</label>
                <textarea  name="labels" id="x-values" placeholder="Example: Label1, Label2, Label3" cols="30" rows="10" onChange={(e) => inputHandler(e)}></textarea>
            </div>
            <div  className="">
                <label htmlFor="values">Values or Y</label>
                <textarea name="values" id="y-values" placeholder="Example: 2, 3, 4" cols="30" rows="10" onChange={(e) => inputHandler(e)}></textarea>
            </div>
        </section>
    )
}

export default General
