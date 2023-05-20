import { SET_SELECTED_EMPLOYEE } from "./selectedEmployeeTypes";


export const setSelectedEmployee=(a)=>{
    return {
        type:SET_SELECTED_EMPLOYEE,
        payload:a
    }
}
