import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import UserPage from "./UserPage";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import StuComplain from "./StuComplain";
import AdminDash from "./AdminDash";
import Adminseecomplain from "./Adminseecomplain";
import AdminReply from "./AdminReply1";
import Sturesponse from "./Sturesponse";
import Deshloader from "./Dashloader";

const App =()=>
{
  return(
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="service" element={<Service/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="login" element={<Login/>}/>
           <Route path="register" element={<Registration/>}/>
           <Route path="userpage" element={<Deshloader/>}>
           <Route exact path="/userpage/stucomplain" element={<StuComplain/>}/>
           <Route exact path="/userpage/response" element={<Sturesponse/>}/>
            </Route>
             <Route path="/admindash" element={<AdminDash/>}>
              <Route exact path="/admindash/seecomplain" element={<Adminseecomplain/>}/>
              <Route exact path="/admindash/adminreply/:id" element={<AdminReply/>}/>
              
              </Route> 
          

          </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;