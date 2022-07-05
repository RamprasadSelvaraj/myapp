import React, { Component } from "react";

class User extends Component {

    constructor(){
        //call the base class constructor
        super()
        //initialize the state
        this.state={
            exp:2
        }
    }

    //create a method to update experience
    updateExp() {
        this.setState({
            exp:3
        })
    }
    
    render() {
        return(
            <div>
                <h1> User Component</h1>
                <h3>Welcome, {this.props.uname} -- Works for {this.props.unit}</h3>
                <h4>Holds {this.state.exp} yrs of experience</h4>
                <button onClick={()=>this.updateExp()}>Update Experience</button>
            </div>
        );
    }
}

export default User;