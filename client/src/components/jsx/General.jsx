import React from 'react'
import "../css/General.css"
import "../css/Basic.css"

const General = () => {
    return (
        <div>
            <div className="form-field-container">
                <label htmlFor="Title">Enter Your Title</label>
                <input type="text" placeholder="My Title" name="Title"/>
            </div>
            <div className="form-field-container">
                <label htmlFor="theme">Choose Your Colors</label>
                <input type="text" placeholder="blue, #f9f9f9, red" name="color" id="color" />
            </div>
        </div>
    )
}

export default General
