import { useState,useEffect } from "react";
import axios from "axios";
import Stuslice from "./Stuslice";
import { useSelector } from "react-redux";
const Sturesponse=()=>{
    const[data,setData]=useState([]);
    let Stuid=useSelector((state)=>state.stuUser.stuid)

    let loaddata=()=>{
        let url=`http://localhost:4000/stucomplain/?stuid=${Stuid}`;
        axios.get(url).then((res)=>{
             setData(res.data)
             console.log(res.data);
                
        })

    }
    useEffect(()=>{
        loaddata()
    },[])
    const Mydata=data.map((key)=>{
        return(
            <>
            <tr>
               <td>{key.complain}</td>
                <td>{key.ans}</td>
               
               
            </tr>
            
            </>
        )
    })
    return(
        <>
        <center>
         <h1 className="sturesponse">Your Answer</h1>
        <table border="1px">
            <tr>
                <td>Complain</td>
                <td>Answer</td>
            </tr>
            {Mydata}
        </table>
        </center>
        </>
    )
}
export default Sturesponse;