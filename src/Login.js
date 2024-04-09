import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Stuslice';
import { loginadmin } from './AdminSlice';
import './Login.css'


const Login=()=>
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[userType,setUserType]=useState("student");
   

    
    







    const myDispatch=useDispatch();
    const myNav=useNavigate();



    // const loggedIn=useSelector(state=>state.stuUser.user);
    // const handleInput=(e)=>{
    //     let name=e.target.name;
    //     let value=e.target.value;
    //     setInput(values=>({...values,[name]:value}))
    //     console.log(setInput);
        
    // }
   



const handleSubmit=(e)=>
{
     
        e.preventDefault();
         
            
     if (userType == "student") 
     {
            
          
        let url= `http://localhost:4000/student/?email=${email}`;
      

        axios.get(url).then((res)=>{
        

        let idwithname = {}
            if(res.data.length==1)
            {
                if(res.data[0].password==password){
                    const username=res.data[0].name;
                    const userid=res.data[0].id;
                    idwithname = {
                        "name" : username,
                        "iddd" : userid
                    }
                
                    // const userData=login(res.data[0].name)
                    // console.log(userData.payload);
                    myDispatch(login(idwithname));
                   
                   myNav('/userpage')

                 
                }
                else 
                {
                alert("Invalid Password");
                }
            }
            else 
            {   
                 alert("Invalid Email !!!");
            }
            
            

        })
     
            
    }
   
    else{
        e.preventDefault();
        let url=`http://localhost:4000/adminlogin/?adminemail=${email}`
        axios.get(url).then((res)=>{
            // console.log(res.data);
          
            if(res.data.length==1)
            {
                if(res.data[0].adminpassword==password)
                {
                    let user=res.data[0].adminname;
                    myDispatch(loginadmin(user));

                    myNav('/admindash')
                  
                    
                }
                else{
                    alert("invalid password")
                }
                
                
            }
            else{
                alert("invalid email");
                
            }
            
        })
     


    }

          
      
  }
  
 
  
    return(
        <>
        <div id="wrapper">
          <div id="box">
          <div id="login">
        
           <div className="input-box">
          <input type='email'  name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter E-mail" required/>

         <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" required/>
      
           </div>
         <select name="student" value={userType} onChange={(e) =>setUserType(e.target.value)} >
        
          <option value={"student"}>Student</option>
          <option value={"admin"}>Admin</option>

         </select>
         <br/>
       
           
           <button onClick={handleSubmit} className="btn">
           Login</button>
           </div>
           <div id="regis">
            <h2>New User!!</h2>
           
          
                <button id='btn2'>
             <h3> <Link to={`/register`}>REGISTER HERE.</Link></h3>
              </button>
              
            </div>
            </div>
           </div>
        </>
    );
  }

    export default Login;
