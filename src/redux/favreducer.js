let favstudents =[]

export const  favreducer=(state = favstudents,action)=>{
    if(action.type==="ADD_FAVSTUDENT"){
        state.push(action.payload)
    }
    else if(action.type==="DELETE_FAVSTUDENT"){
            const filterarr= state.filter((val)=>{
                return val.email !== action.payload
           })
           state=[...filterarr] 
    }
    return state;
}
