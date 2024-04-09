import { useDispatch, useSelector } from "react-redux";
import { logoutadmin } from "./AdminSlice";
import { Link,Outlet } from "react-router-dom";
import './AdminDash.css'
import { useNavigate } from "react-router-dom";
const AdminDash=()=>
{
    const mynav=useNavigate();
    const myselector=useSelector((state)=>state.admin.adminname);
    const myDispatch=useDispatch();
    const handlelogout=(e)=>
    {
        e.preventDefault();
        myDispatch(logoutadmin());
        mynav('/')

    }
    
   
    return(
        <>
          
    <div id="deshboard">

        <div class="deshboard">
            <Link class="active" to={"/admindash"}>Welcome {myselector}</Link>
            <Link to={'seecomplain'}>See Student Complain</Link>
            <a >Change Password</a>
            <a >About</a>
            </div>

            <div class="content">
            <h2>Welcome {myselector}</h2>
            <button className="btnad" onClick={(e)=>handlelogout(e)}>Logout</button>
          
            </div>
           
        </div>


        
        <Outlet/>
      
      
      
       
       
       
       
        </>
    )
}
export default AdminDash;