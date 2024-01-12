import { useState } from "react"
import Rout from "./Task2/Rout";
import First from "./Task2/First";
import Login from "./Task2/Login";
import { Routes,Route } from "react-router-dom";

function App(){
  const [islogin,setislogin]=useState(localStorage.getItem("login"));
  console.log(islogin)
  return(
    <div>
        {
          islogin==="true"?<Rout/>:<First />
        }
        <Routes>
          <Route path="/login" element={<Login setislogin={setislogin}/> }/>
        </Routes>
        
    </div>
  )
}export default App;