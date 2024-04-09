import { useState } from "react";
import axios from "axios";
import './Registration.css'
import { useNavigate } from "react-router-dom";

const Registration=()=>
{
    const myNav=useNavigate();
    const [input, setInput]= useState({});

    const  handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setInput(values=>({...values, [name]:value}));
    }

    const handleSubmit=()=>
    {
        let url="http://localhost:4000/student";
        axios.post(url, input).then((res)=>{
            alert("You are Succesfully Regsitered!!!");
            myNav("/login")
        });
    }


    return(
        <>
        <div id="wrapper1">

<div id="login1">
    
           <h1> User Registration Form</h1>
           <div className="input-box1">
           Enter name : <input type="text" name="name" value={input.name}  onChange={handleInput} placeholder="your name" required/>
           <br />
           Enter email : <input type="email" name="email" value={input.email} onChange={handleInput}  placeholder="your e-mail" required />
           <br />
           Enter password : <input type="password" value={input.password} name="password" onChange={handleInput}  placeholder="enter password" required />
           <br />
           </div>
           <button onClick={handleSubmit} className="btn1">Registration</button>
             </div>
             </div>
        </>
    );
}


export default Registration;