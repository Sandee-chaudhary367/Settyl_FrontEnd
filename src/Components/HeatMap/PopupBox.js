import React, { useState } from 'react';

function PopBox({setShowModal,component}) {

  let [selected,setSelected]=useState([]);
  const updatedComponent = React.cloneElement(component,{selected,setSelected});
  const handleCancel = () => {
    setShowModal({show:false,component:<div></div>});
  };
  const handleSave = () => {
     if(updatedComponent.type.name==="InterestBox"){
      console.log(selected);
     setShowModal({show:false,component:<div></div>});
     }else{
      
     }
    //  console.log(updatedComponent.type.name);
  };

  return (
    <>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          
          onClick={() => setShowModal({show:false,component:<div></div>})}
        >
          <div
            style={{
              backgroundColor: '#fff',
              width: 500,
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 20,
              borderRadius: 10,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {updatedComponent}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ marginRight: 10 }} onClick={handleCancel}>
                Cancel
              </button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default PopBox;