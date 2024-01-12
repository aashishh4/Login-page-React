import { Component } from "react";
class Unmouting4 extends Component
{
    componentWillUnmount()
    {
        alert("component will unmouting is called")
    }
    constructor()
    {
        super()
        console.log("constructor is call")
    }
    render()
    {console.log("renderr is call")
        return(
            <div>
                <h1>Unmouting4</h1>
                hello ashish
            </div>
        )
    }
}export default Unmouting4