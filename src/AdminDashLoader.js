
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const AdminDeshLoader=()=>{
    const myuse=useNavigate();
    const stuName=useSelector((state)=>state.admin.adminname)
      
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
  
      },2000)
    },[])

    useEffect(()=>{
      if(stuName=="")
      {
       
        myuse('/')
      }

    },[])
    return(
        <>
        <div>
            {<AdminD/>}
            {loading && <Adminloader/>}
        </div>

        
        </>
    )
}
export default AdminDeshLoader;