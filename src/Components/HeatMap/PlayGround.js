import React, { useState } from 'react';
import Areabox from './Areabox';
import ChangePassword from './changePassword';
import CipheBox from './CipheBox';
import CipheSmallerBox from './CipheSmallerBox';
import Demo from './Demo';
import InterestBox from './interestBox';
import PopBox from './PopupBox';

let arr1=[
    {name:"Linkdin",component:<input type="text"  name="Linkdin" placeholder="Linkdin"/>},
    {name:"Github",component:<input type="text"  name="Github" placeholder="Github"/>},
    {name:"Facebook",component:<input type="text"  name="Facebook" placeholder="Facebook"/>},
    {name:"Twitter",component:<input type="text"  name="Twitter" placeholder="Twitter"/>},
    {name:"Instagram",component:<input type="text"  name="Instagram" placeholder="Instagram"/>},
    {name:"Website",component:<input type="text"  name="Website" placeholder="Website"/>},
]

let arr2=[
    {name:"Password",component:<input type="password" name="Password" placeholder="*************"/>},
]

let arr3=[
    {name:"Highest education",
    component:<div> 
    <select class="text" style={{color:"lightgray"}} defaultValue="" required name="type">
        <option>Primary</option>
        <option>Secondary</option>
        <option>Higher Secondary</option>
        <option>Graduation</option>
        <option>Post Graduation</option>
    </select>
    </div>},
    {name:"What do you do currently?",
    component:<div> 
    <select class="text" style={{color:"lightgray"}} defaultValue="" required name="type">
        <option>Schooling</option>
        <option>College Student</option>
        <option>Teaching</option>
        <option>Job</option>
        <option>Freelance</option>
    </select>
    </div>},

]

const PlayGround = (props) => {

  const [showModal, setShowModal] = useState({show:false,component:<div></div>});
  
  return (
    <div>
    {showModal.show && (
       <PopBox setShowModal={setShowModal} component={showModal.component}></PopBox>
      )}

    <CipheBox text="ABOUT ME" buttonText="Edit" variableComponent={<Areabox></Areabox>}></CipheBox>
    <CipheBox text="CIPHER MAP" buttonText="" variableComponent={<Demo></Demo>}></CipheBox>
    <CipheBox text="ON THE WEB" buttonText="Edit" variableComponent={<CipheSmallerBox children={arr1}></CipheSmallerBox>}></CipheBox>
    <CipheBox text="PROFESSIONAL INFORMATION" buttonText="Edit"  variableComponent={<CipheSmallerBox  children={arr3}></CipheSmallerBox>}></CipheBox>
    <CipheBox text="PASSWORD & SECURITY" buttonText="Edit" setShowModal={setShowModal} component={<ChangePassword></ChangePassword>} variableComponent={<CipheSmallerBox  children={arr2}></CipheSmallerBox>}></CipheBox>
    <CipheBox text="INTERESTS" buttonText="Edit" setShowModal={setShowModal} component={<InterestBox></InterestBox>} variableComponent={null}></CipheBox>
    </div>
  );
};

export default PlayGround;