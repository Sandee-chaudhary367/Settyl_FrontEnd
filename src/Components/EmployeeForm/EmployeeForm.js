import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { employee, fetchEmployee } from "../../redux/employees/employeeAction";
import "./EmployeeForm.css"
const API_URL="http://localhost:3001/";


let EmployeeForm=({EmployeeFetch}) => {
    
    const submission=async(e)=>{
        try {
          e.preventDefault();
          //console.log("Hello");
          const formData = new FormData(e.target);
          let obj={
              name:formData.get('name'),
              email:formData.get('email'),
              address:formData.get('address'),
              age:formData.get('age'),
              type:formData.get('type'),
              workStyle:formData.get('workStyle'),
              contract:formData.get('contract'),
              full_time:formData.get('full_time'),
          }
  
          let res=await axios.post(API_URL + "addEmployee",obj);  
          console.log(res.data);
          EmployeeFetch();
        }catch (error) {
          console.log(error);
        }
       
    }

  return (
    <div className="bodyClass" >
    <form  id='my-form' onSubmit={submission}>
    <div  >

            <div>
            <label class="label-email">
              <input type="text" class="text" name="name" placeholder="Name" tabindex="0" required />
              <span class="required">Name</span>
            </label>
            </div>

            <div>
            <label class="label-email">
              <input type="email" class="text" name="email" placeholder="Email" tabindex="1" required />
              <span class="required">Email</span>
            </label>
            </div>


            <div>
            <label class="label-email">
              <input type="text" class="text" name="address" placeholder="Address" tabindex="2" required />
              <span class="required">Address</span>
            </label>
            </div>


            <div>
            <label class="label-email">
              <input type="number" class="text" name="age" placeholder="Your Age" tabindex="3" required />
              <span class="required">Age</span>
            </label>
            </div>

        
            <div> 
            <label class="label-email">
            <span class="required">Employee Deparment</span>
            <select tabindex="4" class="text" style={{color:"lightgray"}} defaultValue="" required name="type">
                <option disabled value="">Choose...</option>
                <option>Production</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>Human Resource</option>
                <option>Marketing</option>
                <option>General Management</option>
            </select>
            </label>
            </div>
          
            <div> 
            <label class="label-email">
            <span class="required">Work style</span>
            <select tabindex="5" class="text" style={{color:"lightgray"}} defaultValue="" required name="workStyle">
                <option disabled value="">Choose...</option>
                <option>Work from home</option>
                <option>Hybrid</option>
                <option>On-Site</option>
            </select>
            </label>
            </div>


            <div>
            <label class="label-email">
            <span class="required">Contract</span>
            <select tabindex="6" class="text" style={{color:"lightgray"}} defaultValue="" required name="contract">
                <option disabled value="">Choose...</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Zero-hour</option>
                <option>Casual</option>
                <option>Freelance</option>
                <option>Fixed-term</option>
            </select>
            </label>
            </div>

            <div>
            <label class="label-email">
            <span class="required">Full Time</span>
            <select tabindex="7" class="text" style={{color:"lightgray"}} defaultValue="" required name="full_time">
                <option disabled value="">Choose...</option>
                <option>Yes</option>
                <option>No</option>
            </select>
            </label>
            </div>
            
            <button class="text" form='my-form' type="submit" className="btn btn-primary">Submit</button>
    </div>
    </form>
    </div>
  );
}

const mapDispatchToProps = dispatch =>{
  return {
    EmployeeFetch:()=>dispatch(fetchEmployee())
  }
}

export default connect(null,mapDispatchToProps)(EmployeeForm);