import React, { Component } from "react";

class Login extends Component {
    render(){
        return(
            <div>
                Enter user Name<input type="text"></input><br></br>
                <button type="submit" > Login </button>
            </div>
        );
    };
}

export default Login