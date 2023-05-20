
import axios from "axios";
import React from 'react';
import { connect } from "react-redux";
import { setSelectedEmployee } from "../../redux/selectedEmployee/selectedEmployeeAction";
import './card.styles.css';

const API_URL="http://localhost:3001/";

const Card=({setSelectedEmployee,employee})=>{
    
    const getEmployee=async(e)=>{
        try {
            let _id=e.currentTarget.id;
            // console.log(_id); 
            let res=await axios.get(API_URL + "findbyEmployee/"+_id);  
            //console.log(res.data);
            // setinfo(res.data);
            setSelectedEmployee(res.data);
        } catch (error) {
           console.log(error); 
        }
    }

    return <div className='card-container' id={employee._id} onClick={getEmployee}>
        <img alt="monster" src={`https://robohash.org/${employee._id}?set=set2&size=180x180`}/>
        <h1>{employee.name}</h1>
     </div>

}


const mapDispatchToProps = dispatch =>{
    return {
        setSelectedEmployee:(a)=>dispatch(setSelectedEmployee(a))
    }
  }
  export default connect(null,mapDispatchToProps)(Card);