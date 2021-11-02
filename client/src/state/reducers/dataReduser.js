const dataSample = {
    x: [1, 2, 3], 
    y: [1, 2, 3],
    type: "scatter",
    mode: "markers",
    width: 1,
    colors: ["lightblue"],
    size: ["blue"],
    xTitleColor: "black"
}

const dataReduser = (state=dataSample, action) => {
    switch(action.type){
        case "update data":
            return action.payload
        default:
            return state
    }
}

export default dataReduser