import React from 'react'
import "../css/Home.css"

// React Imports
import { useEffect, useState } from 'react'

// Redux
import { actionCreators } from '../../state/actionCreators/export'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'


// Home component
const Home = () => {
    // redux to check the device
    const dispatch = useDispatch()
    const { setDevice } = bindActionCreators(actionCreators, dispatch)

    const canUse = useSelector((state) => state.canUse)

    // The useEffect will run when the page first loads
    useEffect(() => {
        if (window.screen.width < 800){
            setDevice(false)
        }
    }, [])

    // The output will change depending on the device being used
    return (
        <div id="home">
            {canUse && <h1>Choose a graph and start building!</h1>}
            {!canUse && <h1>Sorry your device cannot use this application, please use a desktop</h1>}
        </div>
    )
}

// Export the home component
export default Home
