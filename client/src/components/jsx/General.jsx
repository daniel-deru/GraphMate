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

    const data = useSelector((state) => state.data)

    return (
        <div id="general">
            <div className="form-field-container" id="title">
                <label htmlFor="Title">Enter Your Title</label>
                <input type="text" placeholder="My Title" name="Title"  onChange={(e) =>  loadData({...data, title: e.target.value})}/>
            </div>
            <div className="form-field-container" id="color">
                <label htmlFor="theme">Choose Your Colors</label>
                <input type="text" placeholder="blue, #f9f9f9, red" name="color" id="color" onChange={(e) =>  loadData({...data, colors: e.target.value.split(",")})}/>
            </div>
        </div>
    )
}

export default General
