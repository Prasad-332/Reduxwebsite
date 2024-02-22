let students = []

export const  reducer = (state = students, action) =>{

    if(action.type === "ADD_STUDENT"){
        state.push(action.payload)
    }
    else if(action.type==="DELETE_STUDENT"){

        const filterarr= state.filter((val) =>{
            return val.email !==action.payload
        })
        state=[...filterarr]
    }
    else if(action.type ==="UPDATE_STUDENT"){
          
        return state.map((student) => {
            if (student.email === action.payload.email) {
                return { ...student, ...action.payload }; // Update student details
            } 
        });

    }
    return state;
    
}