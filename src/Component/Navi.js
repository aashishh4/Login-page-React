import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

function Navi
() {
  
    const navigate = useNavigate();
    
    const logout = () => {
    //  localStorage.setItem("login", false);
      navigate('/');
    }; // Added a missing closing curly brace

  return (
    <div>
      <Link to="/home">Home</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/contact">Contact</Link><br/>
      <Link to="/"></Link><br/>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navi;
