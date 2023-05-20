import axios from "axios";
import React, { useEffect, useState } from 'react';
import ReactMapGL, { NavigationControl } from "react-map-gl"
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./DisplayInfo.css"
import DisplayDetails from "../DisplayDetails/DisplayDetails";
import EditDetails from "../EditDetails/EditDetails";
import { connect } from "react-redux";

const access_token="pk.eyJ1Ijoic2FuZGVlY2hhdWRoYXJ5MzY3MTIzNDU2NTQiLCJhIjoiY2xmbTVrd2pxMDVmNTQzb2Y1ZmU3NDRucyJ9.bFnl3c-MQ1Px6PACaISmmQ"

const DisplayInfo=({info})=>{
     
    let [toggle,setToggle]=useState(true);
    let [lat,setLat]=useState(19.0760);
    let [lon,setLon]=useState(72.8777);

    let setgeocodes=async()=>{
        if(info===null){
            console.log(info)
            return;
        }
        
        let res=await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${info.address}.json?access_token=${access_token}`);
        console.log(res.data.features[0].center)
        let arr=res.data.features[0].center;
        setLat(arr[1]);
        setLon(arr[0]);
    }

    useEffect(()=> {setgeocodes()},[info]);

    
    return (
     <div className='card-container card-Mapbox'>
     
    <div >
     <button style={{position:"absolute",right:"11px",top:"10px"}} onClick={()=>{setToggle(!toggle)}}>E</button>
     {(toggle)?<div><DisplayDetails ></DisplayDetails>
     <div style={{height:"270px",width:"300px",margin:"10px 0 0 0"}}>

        <ReactMapGL 
        mapboxAccessToken={access_token}
        initialViewState={{latitude:lat,longitude:lon,zoom:8}}
        latitude={lat}
        longitude={lon}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        >
        <Marker
        mapboxAccessToken={access_token}
        longitude={lon} 
        latitude={lat}
        draggable
        onDragEnd={(e)=>{setLat(e.lngLat.lat);setLon(e.lngLat.lng)}}
        >
        </Marker>

        <NavigationControl position="top-left"></NavigationControl>

        </ReactMapGL>

       </div>

     </div>:<EditDetails setToggle={setToggle} toggle={toggle}></EditDetails>}
     
    </div>

    </div>)
}

const mapStateToProps = state =>{
    return {
      info:state.infoState.selectedEmployee
    }
}

export default connect(mapStateToProps,null)(DisplayInfo)