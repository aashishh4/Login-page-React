import { useNavigate } from "react-router-dom";


const Front = () => {
    const navigate = useNavigate();
    const loginBut = ()=>{
        navigate("/login")
    }
    
    return (
    <>
    <h1>Click her to login</h1>
    <button onClick={loginBut}>Login</button><br/><br/><br/>
      {/* {!isLogin  ? <Login setIsLogin={setIsLogin} /> : <></>}  */}
    </>
        );
  };
  
  export default Front;