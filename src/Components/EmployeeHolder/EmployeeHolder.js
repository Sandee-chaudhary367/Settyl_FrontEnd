import { useState } from "react";
import "./EmployeeHolder.css"
import Card from "../Card/card";
import  DisplayInfo  from "../DisplayInfo/DisplayInfo";

function EmployeeHolder({data}) {

  
  return (
    <div style={{display:"grid",gridTemplateColumns:"2.5fr 1fr",margin:"15px 15px",gap:"20px"}}>
    <div className="card-list" style={{overflow:"scroll",height:"585px",width:"99%",margin:"0px 10px"}}>
    {data.map((e,i) => {
      return (<Card key={e._id} employee={e}></Card>)
    })}
    </div>
    <div><DisplayInfo></DisplayInfo></div>
    </div>
  );
}

export default EmployeeHolder;
