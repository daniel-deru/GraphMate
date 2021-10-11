const dataReduser = (state=null, action) => {
    switch(action){
        case "update data":
            return action.payload
        default:
            return null
    }
}

export default dataReduser