import { use } from "react"
import Name from "./team";
export default function Biodata({ players }){
    const team=use(players)
    console.log(team);  
   

    return(
           <>
            
            {
                team.map(player=><Name player={player}></Name>)
            }
           </>
             

         )
}