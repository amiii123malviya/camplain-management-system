import { Link, Outlet } from "react-router-dom";
import './App.css'
const Layout=()=>
{
  return(
    <>
    <div id="wrapper">
  
      <div id="menu">
      <div class="logo1">Shikaayat Kare!!</div>
        <ul >

   <li> <Link to="home" className="topmenu">Home</Link> </li>
   <li> <Link to="about" className="topmenu">About</Link> </li>
   <li> <Link to="service" className="topmenu">Service</Link> </li>
   <li> <Link to="contact" className="topmenu">Contact</Link> </li>
    <li> <button><Link to="login" className="btn">Login</Link> </button></li>
   <li> <button><Link to="register" className="btn">Registration</Link></button> </li>
    
  
</ul>
    </div>
     <Outlet/>
      
  
    </div>
  
    </>
  );
}
export default Layout;