import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(prop){
   const {setislogin}=prop;
    const navigate=useNavigate();
    const [email,setemail]=useState();
    const [pass,setpass]=useState();

    function submit(){
       const obj={
            email:email,password:pass
        }

        axios
        .post("https://reqres.in/api/login",obj)
        .then((res)=>{
            console.log(res)
            alert(res.status)
            if(res.status===200){
                localStorage.setItem("login","true");
                setislogin("true");
                navigate("/home")
            }
        })
    }

    return(
        <div>
          email  <input placeholder="email" onChange={(e)=>setemail(e.target.value)}/><br/>
          password <input placeholder="pass" onChange={(e)=>setpass(e.target.value)}/>
          <button onClick={submit}>submit</button>
            
        </div>
    )
}export default Login;