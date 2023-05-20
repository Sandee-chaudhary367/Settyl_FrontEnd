import React from 'react';
import "./CipheBox.css"

const CipheBox = (props) => {
  return (
    <div>
    <div className="my-component">
    <p>{props.text}</p>
    {props.buttonText?<button onClick={()=>{props.setShowModal ? props.setShowModal({show:true,component:props.component}): console.log("Apply Save Function")}} className="orange-button">{props.buttonText}</button>:<React.Fragment></React.Fragment>}
    </div>
    <div>{props.variableComponent}</div>
    </div>
  );
};

export default CipheBox;