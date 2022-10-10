import { useState } from "react";

function Calculator(){


    const[number,setnumber]=useState('');



    const clear = () =>{
        setnumber('')
    }
    const back =()=>{
        setnumber(number.slice(0,-1))
    }
    const sum =() =>{
        
    }
    
    return(
        <>

        <div className="App">
        <input type="text" value={number}></input>
        <br></br>
        <input type='button' value='1'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='2'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='3'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='4'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='5'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='6'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='7'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='8'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='9'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <br></br>
        <input type='button' value='0'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='+'></input>
        <input type='button' value='-'></input>
        <br></br>
        <input type='button' value='*'></input>
        <input type='button' value='/'></input>
        <input type='button' value='='></input>
        <br></br>
        <input type='button' value='.'onClick={(e)=>{setnumber(number + e.target.value)}}></input>
        <input type='button' value='Del'onClick={back}></input>
        <input type='button' value='clr'onClick={clear}></input>
        </div>

        </>
    )
}
export default Calculator;