import Loader from "./Loader";

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserPage from "./UserPage";


const Deshloader=()=>{
    const myuse=useNavigate();
    const stuName=useSelector((state)=>state.stuUser.user)
      
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
  
      },2000)
    },[])

    useEffect(()=>{
      if(stuName==null)
      {
       
        myuse('/')
      }

    },[])
    return(
        <>
        <div>
    {<UserPage/>}
            {loading && <Loader/>}
        </div>

        
        </>
    )
}
export default Deshloader;