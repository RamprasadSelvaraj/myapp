import { Component } from "react";
import {axios} from "axios";

class AxiosDemo extends Component{
    endpointUrl="https://jsonplaceholder.typicode.com/users";
    constructor(){
        super();
        axios.get(this.endpointUrl)
        .then((response)=>
        {
            console.log("Response is : "+ JSON.stringify(response.data));
        })
        .catch((error)=>{
            console.log("error occured");
        });
    }
    render(){
        return(
            <div>
                <h3> Axios Demo </h3>
            </div>
        )
    }
}

export default AxiosDemo;