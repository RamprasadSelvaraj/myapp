import React, { useEffect,useState, useRef } from "react";

const HookRef = () => {
    const[oldVal, oldValue]=useState("");

    // To capture the next available value, useRef()
    const nextValue = useRef("");

    //useEffect hook
    useEffect(()=>{
        nextValue.current=oldVal;
    },[oldVal])
    return(
        <div>
            <h3> use Ref Hook to get the state between teh values</h3>
            Username: <input type="text" value={oldVal} onChange={(e)=>oldValue(e.target.value)}/>
            Old username :: {oldVal} <br/>
            Next username ::: {nextValue.current}
        </div>
    )
}

export default HookRef;