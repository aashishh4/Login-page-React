import React, { useState, useEffect } from 'react';

function Unmouting() {
    const [show, setShow] = useState(true);

    const delHeader = () => {
        setShow(false);
    };

    useEffect(() => { return () => {
            alert("The component named Header is about to be unmounted.");
        };
    }, []);

    return (
        <div>
            {show && <Child />}
            <button type="button" onClick={delHeader}>Delete Header</button>
        </div>
    );
}
 
function Child() {
    return <h1>Hello World!</h1>;
}

export default Unmouting;
