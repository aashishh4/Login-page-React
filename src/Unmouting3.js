import React, { Component } from "react";
import Unmouting4 from "./Unmouting4";

class Unmouting3 extends Component {
    constructor() {
        super();
        this.state =({ show: true }); // Corrected state initialization
    }

    render() {
        return (
            <div>
                {
                    this.state.show ? <Unmouting4 /> : <h1> </h1>
                }
                <button onClick={() => this.setState({ show: !this.state.show })}>toggle</button>
            </div>
        );
    }
}

export default Unmouting3;
