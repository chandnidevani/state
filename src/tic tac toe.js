import { useState } from "react";

function Game(){
    const[text,settext]=useState();
    
    

    return(
        <>


        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button><br></br>
        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button><br></br>
        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button>
        <button onClick={(e)=>settext()}></button>
        </>
    )
}
export default Game;