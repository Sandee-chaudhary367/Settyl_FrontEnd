import {createStore, applyMiddleware} from "redux"
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import logger from "redux-logger"
import thunk from "redux-thunk"
import employeeReducer from "./employees/employeeReducer"

const store=createStore(rootReducer,applyMiddleware(logger,thunk))


export default store;