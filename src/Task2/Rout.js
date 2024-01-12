import { Link, useNavigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Rout(){
    const navigate=useNavigate();


    function logout(){
        localStorage.setItem("login","false");
        navigate("/")
    }

    return(
        <div>
            <Link to="/home">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <button onClick={logout}>Logout</button><br/>

            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>

            </Routes>
        </div>
    )
}export default Rout;