import React from "react";
import {  useHistory } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import './Homepage.css'

function Homepage({login}) {
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await login({
      username: "user123",
      password: "password",
    });
    
    history.push("/companies");
  }
  
  
    return (
        <div className="Homepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Welcome to Jobly <MdOutlineMapsHomeWork /></h1>
            <p className="lead">Find your dream job. Work at your dream company.</p>

                <form onSubmit={handleSubmit}>
                  <button  style={{backgroundColor:"#0072b1", color:"white"}} 
                           className="btn btn-lg mt-4">
                           DEMO USER</button>
                </form>

          </div>
        </div>
    );
  }

export default Homepage;