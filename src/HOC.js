import React, {Component} from "react";

//create HOC
let BaseClass = (HOCComp) => class extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    incCounter() {
        this.setState({
            counter:this.state.counter+10
        })
    }
    render(){
        return(
            <div>
                <h3> Base Component</h3>
                <HOCComp counterValue={this.state.counter} updateCounter={()=>this.incCounter()} />
            </div>
        )
    }
}

//prepare the HOCComp parameter logic
const button = (abc) =>{
    return(
        <button onClick={abc.updateCounter}> Counter : {abc.counterValue}</button>
    )
}

let ButtonHOC = BaseClass(button);

// const button2 = () => {
//     return(
//         <button>Hey, I'm from Second Button Component</button>
//     )
// }
// let ButtonHOC2 = BaseClass(button2);

class HOC extends Component{
    render(){
        return(
            <div>
                <h3>High Order Component</h3>
                <ButtonHOC/>
                {/* <ButtonHOC2/> */}
            </div>
        )
    }
}

export default HOC;