import { use } from "react";

export default function Api({ detail }){
    const detailed=use(detail)
    console.log(detailed);
    return(
        <>
        <div style={{border:"2px solid red",backgroundColor:"tomato",color:"white",padding:"10px"}}><h1>Data:{detailed.length}</h1></div>
       
        </>
    )
}