export const loadGraph = (data) => {
    return (dispatch) => {
        dispatch({
            type: "update graph",
            payload: data
        })
    }
}

export const loadData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "update data",
            payload: data
        })
    }
}

export const setDevice = (supported) => {
    return (dispatch) => {
        dispatch({
            type: "set device",
            payload: supported
        })
    }
}
