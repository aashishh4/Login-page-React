import { Route,Routes,useNavigate,Link} from "react-router-dom";
import First from "./First";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Class from "./Class";
import Login from "./Login";

function Rout(){
   const navigate=useNavigate();
    function logout(){
        localStorage.setItem("login" ,"false")
        navigate("/")
    }

    return(
        <div>
           
            <Link to="/home">Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/cantact">cantact</Link><br/>
            <Link to="/class">class</Link><br/>
          
            <button onClick={logout}>logout</button>

            <Routes>
               
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cantact" element={<Contact/>}/>
                <Route path="/class" element={<Class/>}/>
               

            </Routes>
        </div>
    )
    
}export default Rout;