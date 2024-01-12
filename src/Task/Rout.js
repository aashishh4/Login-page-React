import { Outlet, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";

import About from "./About";
import Contact from "./Contact";

const Rout = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem("login", "false");
    navigate("/")
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>


         <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      </Routes> 
      <Outlet />
    </>
  );
};

export default Rout;
