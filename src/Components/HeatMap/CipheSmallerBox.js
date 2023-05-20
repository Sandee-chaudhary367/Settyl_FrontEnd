import React from 'react';
import "./CipheBox.css"

const CipheSmallerBox = (props) => {
  
const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: props.children.length === 1 ? "1fr" : "1fr 1fr",
        gap: "10px",
        padding:"0 10px"
};

  return (
    <div style={gridContainerStyle}>
    {props.children.map((a)=>{
       // console.log(a)
        return (
    <div style={{padding:"0 10px"}}>
    <div className="my-component">
    { a.name.length!==0 && <p style={{Margin:"0px"}} > {a.name}</p>}
    </div>
    {a.component}
    </div>
    )

})}



</div>

);
};

export default CipheSmallerBox;