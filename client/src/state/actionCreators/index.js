// I decided to put all the action creators in one file since their will only be one per 
// reducer and only three reducers


// Load the type of graph to be displayed
export const loadGraph = (data) => {
    return (dispatch) => {
        dispatch({
            type: "update graph",
            payload: data
        })
    }
}

// Load the data that gets added to the graph
export const loadData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "update data",
            payload: data
        })
    }
}

// load the device displayable boolean
export const setDevice = (supported) => {
    return (dispatch) => {
        dispatch({
            type: "set device",
            payload: supported
        })
    }
}
