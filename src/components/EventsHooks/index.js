import React, { useState } from "react";

export default function EventHooks(){
    const [count,increamentNumber]=useState(0)
    const handleIncreament=()=>{
        increamentNumber(count+1);
    }
    return(
        <div>
            <span>Counter: {count}</span>
            <button onClick={handleIncreament}>+</button>
        </div>
    )
}