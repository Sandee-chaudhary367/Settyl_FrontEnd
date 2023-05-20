import { ADD_EMPLOYEE } from "./employeeTypes"
import { ADD_ALL_EMPLOYEES } from "./employeeTypes"
import axios from "axios";
const API_URL="http://localhost:3001/";

export const employeeFetch=(a)=>{
    return {
        type:ADD_ALL_EMPLOYEES,
        payload:a
    }
}

export const fetchEmployee=()=>{
  return function (dispatch){
      axios.get(API_URL + "getemployee").then(response=>{
        const employee=response.data;
        dispatch(employeeFetch(employee));
    }).catch(error =>{
        console.log(error.message);
    })  
  }
}