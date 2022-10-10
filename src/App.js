// import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import Calculator from './components/calculator';
import Game from './tic tac toe';
import Value from './operator';
import Operator from './operator';

// function App() {
//   const[user,setuser] = useState("cdmi");
  
//     const btnhandler = () =>{
//       setuser("kashmira");
//     }
//     return (
//     <div className="App">
//       <h1>{user}</h1>
//       <h1>{user}</h1>
//       <h1>{user}</h1>
//       <h1>{user}</h1>
//       <h1>{user}</h1>
//       <h1>{user}</h1>
//       <input type="button" value="Click Here" onClick={btnhandler}></input>
   
//     </div>

//   );
// }

// function App() {
// const[number,setnumber] = useState(0);

// const btnclick1 =() =>{
//   setnumber(number+1);
// } 
// const btnclick2 =() =>{
//   setnumber(number-1);
// }

//   return(
//     <div className='App'>
//       <input type="text"  value={number}></input><br></br>
//       <input type="button" value="+" onClick={btnclick1}></input>
//       <input type="button" value="-" onClick={btnclick2}></input>

//     </div>
//   )
// }
// function App(){
//   const[number1,setnumber1] = useState(0);
//   const[number2,setnumber2] = useState(0);
//   const[sum,setsum] = useState("")

//   const btnplus = () =>{
//     setsum(parseInt(number1)+parseInt(number2));
//   }
//   const btnsub = () =>{
//     setsum(parseInt(number1)-parseInt(number2));
//   }
//   const btnmul = () =>{
//     setsum(parseInt(number1)*parseInt(number2));
//   }
//   const btndiv = () =>{
//     setsum(parseInt(number1)/parseInt(number2));
//   }
  
//   return(
//     <div className='App'>
//       <input type="text" onChange={(e)=>{setnumber1(e.target.value)}}></input>
//       <input type="text" onChange={(e)=>{setnumber2(e.target.value)}}></input>
//       <br></br>
//       <input type='button' value='+' onClick={btnplus}></input><br></br>
//       <input type='button' value='-' onClick={btnsub}></input><br></br>
//       <input type='button' value='*' onClick={btnmul}></input><br></br>
//       <input type='button' value='/' onClick={btndiv}></input>
//       <br></br>
//       <input type='text' value={sum} ></input>
//     </div>
//   )
// }
function App(){
  return(
    <>
    <div className='App'>
         {/* <Calculator/> */}
         {/* <Game/> */}
         <Operator/>
    </div>
    </>
  )

}



export default App;
 