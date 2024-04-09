import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import './UserPage.css'
import { logout } from "./Stuslice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Stucomplain from "./StuComplain";

const UserPage = () => {
  const myUse = useSelector((state) => state.stuUser.user);
  const myDispatch = useDispatch();
  const myNav=useNavigate();
  const handlelogout = (e) => {
    e.preventDefault();
    myDispatch(logout());
    myNav('/')
    
  };

  // console.log(myuse);

  return (
    <>
   
      <section id="deshboard">
        <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
          Welcome {myUse}
        </h1>
        <a
          href="#"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
      <button style={{ background: "white", padding: "0.5rem 1rem" }}
            onClick={(e) => {
              handlelogout(e);
              
            }}
          >
            Logout!
          </button>
        </a>

        <div className="deshboard">
          <Link to={"/deshboard"}>Student Desboard</Link>
          {/* <Link>Welcome {myUse}</Link> */}

          <Link to={"stucomplain"}>Student Complain</Link>
          <Link to={"response"}>See Answer</Link>
          <Link>Forget password</Link>


        </div>
        <Outlet />
      </section>
     



    </>
  );
};
export default UserPage;
