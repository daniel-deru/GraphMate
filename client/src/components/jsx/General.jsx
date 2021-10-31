import "../css/General.css"
import "../css/Basic.css"

// Redux
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state/actionCreators/export'

// Hooks
import { useState } from "react"

const General = () => {
    const dispatch = useDispatch()
    const { loadData } = bindActionCreators(actionCreators, dispatch)
    const graph = window.location.pathname
    const correctGraph = graph == "/pie" || graph == "/scatter"

    const data = useSelector((state) => state.data)

    const titleHandler = (title) => {
        loadData({...data, title})
    }

    const colorHandler = (value) => {
        const colors = window.location.pathname == "/line" ? value : value.split(",")
        loadData({...data, colors})
    }

    return (
        <div id="general">
            <div className="form-container">
                <div className="form-field-container" id="title">
                    <label htmlFor="Title">Enter Your Title</label>
                    <input type="text" placeholder="My Title" name="Title"  onChange={(e) =>  titleHandler(e.target.value)}/>
                </div>
                <div className="form-field-container" id="color">
                    <label htmlFor="theme">Choose Your Colors</label>
                    <input type="text" placeholder="blue, #f9f9f9, red" name="color" id="color" onChange={(e) => colorHandler(e.target.value)}/>
                </div>
                <div className="form-field-container">
                    <label htmlFor="titlecolor">Title Color</label>
                    <input type="text" name="titlecolor" id="" />
                    <label htmlFor="titlesize">Title Size</label>
                    <input type="text" name="titlesize" id="" />
                </div>
            </div>
        </div>
    )
}

export default General
