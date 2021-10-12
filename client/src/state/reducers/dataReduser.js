const dataReduser = (state=null, action) => {
    switch(action.type){
        case "update data":
            return action.payload
        default:
            return null
    }
}

export default dataReduser