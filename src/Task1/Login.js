import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(prop){
     const navigate=useNavigate()
    const {setdata}=prop;
    const [email,setemail]=useState();
    const[pass,setpass]=useState();

    function loginpage(){
        const obj={
            email: email,
            password: pass
        }
        console.log(obj)
        axios
        .post("https://reqres.in/api/login",obj)
        .then((res)=>{
           alert(res.status);
            console.log(res);
            if(res.status===200)
            localStorage.setItem("login","true")
           
            setdata("true")
            navigate("/home")
            
        })
    }
    return(
        <div>
            <input placeholder="email" onInput={e=>setemail(e.target.value)}/><br/>
            <input placeholder="password" onInput={e=>setpass(e.target.value)}/><br/>
            <button onClick={loginpage}>singup</button>
        </div>
    )
}
export default Login;