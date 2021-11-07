// The type reducer controls which graph to display in the window
// it updates the store with the data (payload) that is passed to it
const typeReduser = (state=null, action) => {
    switch(action.type){
        case "update graph":
            return action.payload
        default:
            return state
        
    }
}

export default typeReduser