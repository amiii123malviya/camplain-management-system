import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import './StuComplain.css'

const Stucomplain=()=>{
    const[input,setinput]=useState("");
    const myselector=useSelector(state=>state.stuUser.stuid);

    const handleSubmit=()=>{
        
        let url="http://localhost:4000/stucomplain";
        axios.post(url,{"stuid":myselector,"complain":input,"ans":""}).then(()=>{
            alert("your complain succesfully registered!!!")
            
        })

    }

    return(
        <>
        <div className="main">

        <h2>Write Complain here</h2>
        <div className="box-field">
        <textarea rows={10} cols={50} className="typehere" name="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button className="btn1" onClick={handleSubmit}>Submit</button>
        </div>
        
        </div>


        </>
    )
}
export default Stucomplain;