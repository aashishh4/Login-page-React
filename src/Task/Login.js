import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const { setIsLogin } = props;
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const loginfun = ()=> {
        const obj = {
            email: email,
            password: pass
        }
        console.log(obj)
        axios.post("https://reqres.in/api/login",obj).then((res)=>{
            console.log(res.status)
            if (res.status === 200) {
              localStorage.setItem("login", "true"); 
              console.log(typeof "true")
              setIsLogin("true")
              navigate('/');
            }
        })
    }
    return (
    <>
    <input placeholder="email" onInput={e => setEmail(e.target.value)}></input><br></br>
    <input placeholder="password" onInput={e => setPass(e.target.value)}></input>
    <button onClick={loginfun}>Submit</button>
    </>
        );
  };

  export default Login;
  //https://reqres.in/api/login