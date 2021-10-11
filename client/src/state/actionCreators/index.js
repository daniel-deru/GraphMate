export const loadData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "update graph",
            payload: data
        })
    }
}
