import React, { useEffect, useState } from "react";

const HookEffect = () => {
    const [flag, setFlag] = useState(100);

    useEffect(()=>{
        setTimeout(()=>{
            setFlag((flag)=>flag+20);
        },3000);
    });

    return(
        <div>
            <h2> Hook Effect Demo </h2>
            <h3> Flag value is {flag}</h3>
        </div>
    )
}

export default HookEffect;