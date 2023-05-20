import React from 'react';
import CipheBox from './CipheBox';
import Demo from './Demo';

const Areabox = (props) => {
    const textareaStyle = {
        width: "98%",
        height: "25vh",
        margin: "20px 10px",
      };
    
      return (
        <textarea
          placeholder="Enter your text here..."
          style={textareaStyle}
        />
      );
};

export default Areabox;