const typeReduser = (state=true, action) => {
    switch(action.type){
        case "set device":
            return action.payload
        default:
            return true
        
    }
}

export default typeReduser