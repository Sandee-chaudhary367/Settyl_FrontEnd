import React, { useState } from 'react';


const InterestBox = ({selected,setSelected}) => {

   //console.log("Miss Jan")
  const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        padding:"0 10px"
  };

  let HandleClick=(e)=>{
    let temp=e.target.innerText
    console.log((temp));
    if(selected.includes(temp)){
      setSelected(selected.filter((a)=>a!==temp));
    }else{
      setSelected([...selected,e.target.innerText])
    }
  }

  const paragraphStyles = {
    backgroundColor: "yellow",
    fontWeight: "bold",
    padding:"5px 10px"
  };

  const paragraphStyles2={
    padding:"5px 10px"
  }


  return (

    <div style={gridContainerStyle}>
    <p onClick={HandleClick}  style={selected.includes("App Development") ? paragraphStyles : paragraphStyles2}>App Development</p>
    <p onClick={ HandleClick} style={selected.includes("Web Development") ? paragraphStyles : paragraphStyles2} >Web Development</p>
    <p onClick={HandleClick } style={selected.includes("Game Development") ? paragraphStyles : paragraphStyles2} >Game Development</p>
    <p onClick={HandleClick } style={selected.includes("Data Structures") ? paragraphStyles : paragraphStyles2} >Data Structures</p>
    <p onClick={HandleClick } style={selected.includes("Programming") ? paragraphStyles : paragraphStyles2} >Programming</p>
    <p onClick={ HandleClick} style={selected.includes("Machine Learning") ? paragraphStyles : paragraphStyles2} >Machine Learning</p>
    <p onClick={HandleClick } style={selected.includes("Data Science") ? paragraphStyles : paragraphStyles2} >Data Science</p>
    <p onClick={ HandleClick} style={selected.includes("Others") ? paragraphStyles : paragraphStyles2} >Others</p>
    </div>
  );
};

export default InterestBox;