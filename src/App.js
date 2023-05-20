import './App.css';
import { connect } from "react-redux";
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import { useState, useEffect } from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom"
import EmployeeHolder from './Components/EmployeeHolder/EmployeeHolder';
import DashBoard from './Components/dashboard/dashboard';
import Nav from './Components/navBar/navbar';
import { fetchEmployee } from './redux/employees/employeeAction';
import { HeatMap } from './Components/HeatMap/heatMap';
import Demo from './Components/HeatMap/Demo';
import PlayGround from './Components/HeatMap/PlayGround';
import PopBox from './Components/HeatMap/PopupBox';
const API_URL="http://localhost:3001/";


function App({EmployeeFetch,EmployeeArr}) {

    useEffect(() => {
      EmployeeFetch();
    }, []);

  return (
    <div>
     
    <Nav></Nav>

    <div className="App">
       <Routes>
       <Route path="/" element={ <EmployeeHolder data={EmployeeArr}></EmployeeHolder>}></Route>
       <Route path="/form" element={<EmployeeForm></EmployeeForm>}></Route>
       <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
       <Route path="/heatmap" element={<PlayGround></PlayGround>}></Route>
       </Routes>
    </div>

    </div>
  );
}

const mapStateToProps = state =>{
  return {
    EmployeeArr:state.employeeState.employee
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    EmployeeFetch:()=>dispatch(fetchEmployee())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
