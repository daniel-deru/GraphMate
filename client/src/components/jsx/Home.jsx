import React from 'react'
import "../css/Home.css"

import { useEffect, useState } from 'react'

// Redux
import { actionCreators } from '../../state/actionCreators/export'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    const { setDevice } = bindActionCreators(actionCreators, dispatch)

    const canUse = useSelector((state) => state.canUse)


    useEffect(() => {
        if (window.screen.width < 800){
            setDevice(false)
        }
    }, [])

    return (
        <div id="home">
            {canUse && <h1>Choose a graph and start building!</h1>}
            {!canUse && <h1>Sorry your device cannot use this application, please use a desktop</h1>}
        </div>
    )
}

export default Home
