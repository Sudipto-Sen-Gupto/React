import { useState } from "react"

export default function Ball(){
    const [ball,setBall]=useState(0);
        
    const ballHandle=()=>{
        const newBall=ball+1;
        setBall(newBall)
    }

    const Over=Math.floor(ball/6);
    const remainBall=ball%6;
    return (
        <div><h1>Ball:{ball}</h1>
        {
             <p> Over:{Over}.{remainBall}</p>
        }
                <button onClick={ballHandle}>Balling</button>
        </div>
        
    )
}