import { Link } from "react-router-dom";

let Nav=()=>{
    
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Link to="/">Employee</Link>
        <Link to="/dashboard">Darboard</Link>
        <Link to="/form">Form</Link>
        <Link to="/heatmap">Heatmap</Link>
        </div>
        </>
    )
}

export default Nav;