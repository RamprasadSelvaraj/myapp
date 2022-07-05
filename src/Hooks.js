// step 1
import React, { useState } from "react";

// step 2

// old 
// function Hooks(){
//     return{

//     }
// }

const Hooks = () => {
    const [counter, setCounter] = useState(10);
    const Counter = (e) => {
        setCounter(e.target.value);
    }

    return(
        <div>
            <h3> Using React Hooks in Function Component</h3>
            Counter Value is {counter} <input value={counter} onChange={Counter}/>
        </div>
    )
}

// step 3
export default Hooks;