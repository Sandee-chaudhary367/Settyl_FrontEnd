
import { combineReducers } from 'redux';
import employeeReducer from './employees/employeeReducer';
import selectedReducer from './selectedEmployee/selectedEmployeeReducer';


const rootReducer = combineReducers({
	employeeState: employeeReducer,
	infoState: selectedReducer
})

export default rootReducer;