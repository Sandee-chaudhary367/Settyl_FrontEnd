import { ADD_ALL_EMPLOYEES } from "./employeeTypes"

const intialState={
    employee:[]
}

const employeeReducer=(state=intialState,action)=>{
    switch(action.type){
        case ADD_ALL_EMPLOYEES: return {
            ...state,
            employee:action.payload
        }
    
    default : return state
    }
}

export default employeeReducer