// This stores a true or false value on whether or not the user has a mobile devices or not
const typeReduser = (state=true, action) => {
    switch(action.type){
        case "set device":
            return action.payload
        default:
            return true
        
    }
}

export default typeReduser