import { useState, useEffect } from "react";
function Unmouting1() {
    const [data, setdata] = useState(true);

    function change()
    {
        setdata(false)
    }

    useEffect(() => {
         {
            alert("The component named Header is about to be unmounted.");
        };
    }, []);
  return(
    <div>
        {data && <Child/>}
        <button onClick={change}>ok</button>
    </div>
  )
  
function Child() {
    return <h1>Hello World!ashi</h1>;
}

}export default Unmouting1