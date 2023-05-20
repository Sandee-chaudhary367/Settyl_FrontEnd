import { SET_SELECTED_EMPLOYEE } from "./selectedEmployeeTypes"

const intialState={
    selectedEmployee:null
}

const selectedReducer=(state=intialState,action)=>{
    switch(action.type){
        case SET_SELECTED_EMPLOYEE: return {
            ...state,
            selectedEmployee:action.payload
        }
    default : return state
    }
}

export default selectedReducer