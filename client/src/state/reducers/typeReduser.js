const typeReduser = (state="pie", action) => {
    switch(action.type){
        case "update graph":
            return action.payload
        default:
            return "pie"
        
    }
}

export default typeReduser