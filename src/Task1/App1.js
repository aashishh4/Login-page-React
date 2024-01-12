import { useState } from "react";
import First from "./Task1/First";
import Rout from "./Task1/Rout";
import { Route,Routes} from "react-router-dom";
import Login from "./Task1/Login";
  

function App(){
  const [data,setdata]=useState(localStorage.getItem("login"))
  console.log(data);
  return(
    <div>
      {
        data==="true" ? (<Rout/>):(<First setdata={setdata}/>)

      }
      <Routes>
       <Route path="/login" element={<Login setdata={setdata} />}/>
       </Routes>
    </div>
  )
} export default App;