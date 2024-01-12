import { useNavigate } from "react-router-dom"

function First() {
  const navigate = useNavigate()

    function loginbutton() {
        navigate("/login")
    }

    return (
        <div> 
            <h1>Click in  login page </h1>
            <button onClick={loginbutton}>login page</button>
        </div>
    )
}
export default First;