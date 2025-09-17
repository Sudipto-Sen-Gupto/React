import { useState } from "react"

export default function Cricket(){
    
    const [runs,setRuns]=useState(0)
      const singleHandle=()=>{
                let single=runs+1;
                setRuns(single)
      }
      const doubleHandle=()=>{
              let doubles=runs+2;
              setRuns(doubles)
      }
      
      const fourHandle=()=>{
        const four=runs+4;
        setRuns(four)
      }

      const sixHandle=()=>{
        const six=runs+6;
        setRuns(six)
      }
    return(
        <div>
            <h1>Runs:{runs}</h1>
            {
               runs>=100 && <p>Century</p>
            }
            {
                runs>=50 && runs<100 && <p>Half Century</p>
            }
             <button onClick={singleHandle}>Single</button>
             <button onClick={doubleHandle}>Double</button>
             <button onClick={fourHandle}>Four</button>
             <button onClick={sixHandle}>Six</button>
        </div>
        
    )
}