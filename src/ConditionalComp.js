import React, { Component } from "react";

class ConditionalComp extends Component {
    render(){
        // declare variables
        let flag = true
        let outputrender=null;
        if(flag){
            outputrender=<div style={{"backgroundColor":"yellow","color":"green"}}>
                <h2> Success Layout rendered</h2>
            </div>
        }else{
            outputrender=<div style={{"backgroundColor":"yellow","color":"red"}}>
                <h3>Failure Layout rendered</h3>
            </div>
        }
        return(
            <div>
                <h2> Conditional Render</h2>
                {/* To display the output*/}
                {outputrender}
            </div>
        )
    }
}

export default ConditionalComp;