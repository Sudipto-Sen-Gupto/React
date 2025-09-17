
export default function Name({ player }){
    console.log(player);
    const {name,email}=player;
    const design={
        border:"2px solid blue",
        padding:"20px",
        margin:"10px"
    }
    return(
         <>
         <h1 style={design}>name:{name}
            <p>email:{email}</p>
         </h1>
         
               </> 
   
    )
}