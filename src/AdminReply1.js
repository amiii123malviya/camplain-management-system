import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './AdminReply1.css';
const AdminReply=()=>{
    const {id}=useParams();
    const[mydata,setMydata]=useState("")
    // console.log(mydata);

    const handleSubmit=()=>{
        let url=`http://localhost:4000/stucomplain/${id}`
        axios.patch(url,{"ans":mydata}).then(()=>{
            alert("Answer reply succesfully")
            
            
        })
    }
    
    
    return(
        <>

        <center>
        <h1 className="adminreply">
            Welcome to admin reply {id}

        </h1>
        <div className="main">

        <h2>Admin Answer here</h2>
        <div className="box-field">
        <textarea rows={10} cols={50} className="typehere" name="text" value={mydata} onChange={(e)=>{setMydata(e.target.value)}}/>
        <button className="btn1"  onClick={handleSubmit}>Submit</button>
        </div>
        
        </div>

        </center>
       
        
        </>
    )
}
export default AdminReply;