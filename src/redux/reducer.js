let initialState = {
    loading:true,
    users: []
}


export default (state = initialState, action)=>{
    switch(action.type){
        case "ADD_USERS":
            console.log('add')
            return [...state, action.payload]

        case "DELETE_USERS":
             return state.filter((user)=>{
                 return user.id!==action.payload
             })
        case "EDIT_USERS":
            return state.map(user=>{
                if(user.id===action.payload.id)
                    return action.payload;
                return user;

            })
        case "UPDATE_ALL_USERS":
            return {users:action.payload, loading:false}
        default:
            return state;
    }
}