import axios from "axios"
import {useEffect, useState} from "react"
import { connect } from "react-redux";
import { fetchEmployee } from '../../redux/employees/employeeAction';
import {setSelectedEmployee} from "../../redux/selectedEmployee/selectedEmployeeAction.js"

const API_URL="http://localhost:3001/";

const EditDetails = ({setSelectedEmployee,EmployeeFetch,info,setToggle,toggle})=>{

    const [email, setemail] = useState(info===null?"NA":info.email);
    const [name, setname] = useState(info===null?"NA":info.name);
    const [type, settype] = useState(info===null?"NA":info.type);
    const [age, setage] = useState(info===null?"NA":info.age);
    const [contract, setcontract] = useState(info===null?"NA":info.contract);
    const [address, setaddress] = useState(info===null?"NA":info.address);
    const [workStyle, setworkStyle] = useState(info===null?"NA":info.workStyle);
    const [full_time, setfull_time] = useState(info===null?"NA":info.full_time);

    const set={settype,setaddress,setemail,setage,setname,setfull_time,setworkStyle,setcontract}
 
    let setInfoData=async()=>{
        setemail(info.email);
        setname(info.name);
        settype(info.type);
        setage(info.age);
        setcontract(info.contract);
        setaddress(info.address);
        setworkStyle(info.workStyle);
        setfull_time(info.full_time);
    }
    useEffect(()=> {setInfoData()},[info])

    if(info===null){
        return (<div>Cannot Change</div>)
    }
    //console.log(info)

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(value)
        //setname(value)
        set[`set${name}`](value);
    }

    let editfn=async(e)=>{
        e.preventDefault();
        //console.log(e.target);
        //console.log(info._id);
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
        //console.log(obj)
        let res=await axios.put(API_URL + "updateEmployeeDetails/"+info._id,obj); 
        setSelectedEmployee({...obj,_id:info._id})
        EmployeeFetch();
        setToggle(!toggle)
    }
    
    return (
        <>

        <div style={{overflow:"scroll",height:"84vh"}} >
        <form  id='my-form2' onSubmit={editfn}>

        <div>
        <label >
          <input  class="text" type="text"  name="name" value={name} onChange={handleChange} tabIndex="0" required />
          <span >Name</span>
        </label>
        </div>

        <div>
        <label class="label-email">
          <input type="email" class="text" name="email" value={email}  onChange={handleChange}  tabIndex="1" required />
          <span>Email</span>
        </label>
        </div>

        <div>
        <label class="label-email">
          <input type="text" class="text" name="address" value={address}  onChange={handleChange} tabIndex="2" required />
          <span >Address</span>
        </label>
        </div>

        <div>
        <label >
          <input type="number" name="age" value={age} onChange={handleChange}  tabIndex="3" required />
          <span >Age</span>
        </label>
        </div>

        <div> 
        <label class="label-email">
        <span>Employee Deparment</span>
        <select tabIndex="4" class="text" style={{color:"lightgray"}} onChange={handleChange}  value={type} required name="type">
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
        <span>Work style</span>
        <select tabIndex="5" class="text" style={{color:"lightgray"}} onChange={handleChange}  value={workStyle} required name="workStyle">
            <option>Work from home</option>
            <option>Hybrid</option>
            <option>On-Site</option>
        </select>
        </label>
        </div>


        <div>
        <label class="label-email">
        <span>Contract</span>
        <select tabIndex="6" class="text" style={{color:"lightgray"}}  onChange={handleChange} value={contract} required name="contract">
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
        <select tabIndex="7" class="text" style={{color:"lightgray"}} onChange={handleChange}  value={full_time} required name="full_time">
            <option>Yes</option>
            <option>No</option>
        </select>
        </label>
        </div>
        
        
        <button class="text" form='my-form2' type="submit" className="btn btn-primary">Submit</button>

    </form>
    </div>
       </>
    )
}


const mapStateToProps = state =>{
    return {
      info:state.infoState.selectedEmployee
    }
  }

const mapDispatchToProps = dispatch =>{
    return {
      EmployeeFetch:()=> dispatch(fetchEmployee()),
      setSelectedEmployee:(a)=>dispatch(setSelectedEmployee(a))
    }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(EditDetails);