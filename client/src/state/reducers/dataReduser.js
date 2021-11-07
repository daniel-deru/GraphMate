// basic data sample for when the graph is first loaded to prevent errors
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

// store all the data related to the chart itself including all the 
// configurations, customizations and the data itself
const dataReduser = (state=dataSample, action) => {
    switch(action.type){
        case "update data":
            return action.payload
        default:
            return state
    }
}

export default dataReduser