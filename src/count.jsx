import { useState } from "react"

export default function Count(){
 
    const design={
        backgroundColor:"black",
        color:"white",
        border:"2px solid red"
        ,borderRadius:"20px"
    }

    const [value,setValue]=useState(0)
    const handleClick=()=>{
          const newValue=value+1;
          setValue(newValue);
    }
    return(
        <div style={design}>
            <h1>Count:{value}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}