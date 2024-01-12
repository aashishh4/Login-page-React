import { useNavigate } from "react-router-dom";

function First(){
    const navigate=useNavigate();

    function change(){
        navigate("/login")
    }

    return(
        <div>
            <h1>click in login page</h1>
            <button onClick={change}>Login</button>
        </div>
    )
}export default First;
