import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "../barchart/barchart"
import Pie from "../barchart/Piehook"
import NumberPlate from "../NumberPlate/NumberPlate"
import "./dashboard.css"

let DashBoard=()=>{

  let [Loading,setLoading]=useState(true);
  let [distinct,setDistinct]=useState(null);
  let [c1,setc1]=useState([
    { _id: 'Healthcare', count: 2 },
  ]);
  let [c2,setc2]=useState([
    { _id: 'Healthcare', count: 2 },
    { _id: 'Information Technology', count: 15 },
  ]);
  let [c3,setc3]=useState([
    { xAxisValue: 'Chennai', yAxisValue: 1 },
    { xAxisValue: 'Delhi', yAxisValue: 4 },
  { xAxisValue: 'Mumbai', yAxisValue: 3 },
  { xAxisValue: 'Uttrakhand', yAxisValue: 1 },
  { xAxisValue: 'Harayana', yAxisValue: 1 }
  ]);

  const handleChange=async(e)=>{
         // console.log(e.target.name+" "+e.target.value);
         let {name,value}=e.target
         console.log({name:value});
         if(name==="Catorgory1"){
          setc1([])
            //setc1(response.data)
        }else{
          setc2([])
          //setc2(response.data)
        }
         const response=await axios.post("http://localhost:3001/getPieData",{name:value});
         console.log(response.data)
         if(name==="Catorgory1"){
            setc1([])
            setc1(response.data)
         }else{
          setc2([])
          setc2(response.data)
         }
        //setc1(response.data)
        
  }  

  const BringDistinct=async()=>{
    try{
    const response=await axios.get("http://localhost:3001/getDistinctValue");
    console.log(response.data);
    await setDistinct(response.data)
    setLoading(false);
    }catch(e){
      console.log(e);
      setLoading(true);
    } 
 }
 

useEffect(()=>{
    BringDistinct()
},[])



  return (
    <div key="insideBox" className="InsideBox">
    <React.Fragment>
    {!distinct?<React.Fragment></React.Fragment>:<React.Fragment>
    <div className="Leftpart"> 
       
       <div className="topLeft">
        <div>
        <NumberPlate style={{width:"170px"}} title="contract" val="5" arr={distinct.contract}> </NumberPlate>
        </div>
        <div>
        <NumberPlate style={{width:"170px"}} title="workStyle" val="2" arr={distinct.workStyle}> </NumberPlate>
        </div>
        <div>
        <NumberPlate style={{width:"170px"}} title="type" val="2" arr={distinct.type}> </NumberPlate>
        </div>
       </div>

       <div className="bottomLeft">
       <div>
       <label for="Catorgory1" style={{display:"inline"}}>Catorgory : </label>
       <select onChange={handleChange} style={{width:"200px"}} className="dd2" id="Catorgory1" name="Catorgory1">
       <option selected > workStyle </option>
       <option >contract</option>
       <option >full_time</option>
       <option >type</option>                 
       </select> 
       <Pie data={c1} width={290} height={200} innerRadius={70} outerRadius={100} />
       </div>
       <div>
       <label for="Catorgory2" style={{display:"inline"}}>Catorgory : </label>
       <select onChange={handleChange} style={{width:"200px"}} className="dd2" id="Catorgory2" name="Catorgory2">
       <option selected > workStyle </option>
       <option >contract</option>
       <option >full_time</option>
       <option >type</option>                  
       </select>  
       <Pie data={c2} width={290} height={200} innerRadius={70} outerRadius={100} />
       </div>
       </div>
    </div>

    <div className="RightPart">
     
     <BarChart
      width={450}
      height={650}
      margin={{ top: 0, right: 20, bottom: 50, left: 20 }}
      data={c3}
     />

    </div>
    </React.Fragment>}
    </React.Fragment>
    </div>
  )
}

export default DashBoard;
