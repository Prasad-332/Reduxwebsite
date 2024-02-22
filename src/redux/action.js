export const addstudent = (val) => {

    return {
        type: "ADD_STUDENT",
        payload: val
    }
}
export const deletestudent = (val) => {

    return {
        type: "DELETE_STUDENT",
        payload: val
    }
}

export const updatestudent = (val) => {

    return {
        type: "UPDATE_STUDENT",
        payload: val
    }
}

export const addfavstudent = (val) => {
    return {
        type: "ADD_FAVSTUDENT",
        payload: val
    }
}

export const  deletefavstudent=(val)=>{
    return{
        type:"DELETE_FAVSTUDENT",
        payload:val
    }
}