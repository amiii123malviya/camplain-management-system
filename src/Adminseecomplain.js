
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import './Adminseecomplain.css';
const Adminseecomplain=() => {
    const [data, setData] = useState([]);
    const [newdata, setNewData] = useState([]);

    let Serial_Number = 0
    const myloadData = () => {
        let url = "http://localhost:4000/student";
        axios.get(url).then((res) => {

            setNewData(res.data);
        })
    }

    const loaddata = () => {

        let url = "http://localhost:4000/stucomplain";
        axios.get(url).then((res) => {
            setData(res.data)
        })
    }


    useEffect(() => {

        loaddata()
        myloadData()

    }, [])





    const myData = data.map((key) => {
        let name = ""
        let email = ""
        Serial_Number++;
        for (let i = 0; i < newdata.length; i++) {
            if (key.stuid === newdata[i].id) {
                name = newdata[i].name
                email = newdata[i].email
            }

        }
        return (
            <>
           
                <tr id="board">
                    <td>{Serial_Number}</td>
                    <td>{name}</td>
                    <td>{email}</td>

                    <td>{key.stuid}</td>
                    <td>{key.complain}</td>
                    <Link to={"/admindash/adminreply/"+key.id}><td>Reply</td></Link>

                   

                 
                    
                </tr>
                
            </>
        )

    })

    return (
        <>
            <center>

                <h1 style={{ textAlign: "center" }}>Welcome</h1>
                <table border="1px" style={{ fontSize: "1.52rem" }}>
                    <tr>
                        <td>Serial_Number</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Id</td>
                        <td>Complain</td>


                    </tr>
                    {myData}





                </table>

            </center>






        </>
    )
}
export default Adminseecomplain;