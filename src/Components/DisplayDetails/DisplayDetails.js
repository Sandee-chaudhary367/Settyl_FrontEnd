import { connect } from "react-redux"
import "./DisplayDetails.css"

const DisplayDetails = ({info})=>{


    return (
       <div className="textLines">
       <p>name : {info!==null?info.name:"no record"}</p>
       <p>email : {info!==null?info.email:"no record"}</p>
       <p>Address : {info!==null?info.address:"no record"}</p>
       <p>Type : {info!==null?info.type:"no record"}</p>
       <p>Age : {info!==null?info.age:"no record"}</p>
       <p>Work Style : {info!==null?info.workStyle:"no record"}</p>
       <p>contract : {info!==null?info.contract:"no record"}</p>
       <p>Full Time : {info!==null?info.full_time:"no record"}</p>
       </div>
    )
}

const mapStateToProps = state =>{
    return {
      info:state.infoState.selectedEmployee
    }
  }

export default connect(mapStateToProps,null)(DisplayDetails)