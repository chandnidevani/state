import { useState } from "react";

function Operator(){

    const[name,setname]=useState();
    const[password,setpassword]=useState();
    const[email,setemail]=useState();
    const[main,setmain]=useState([]);

    const btnclick =() =>{
        const obj = {
            name:name,
            email:email,
            password:password
        }
        setmain([...main,obj]);
        }

    const btnDelete =()=>{
        setmain([]);
        // alert('Are you Sure for Delete data?')
    }

        return(
        <>
        Name:<input type='text' onChange={(e)=>setname(e.target.value)}></input>
        <br></br>
        Email:<input type='text' onChange={(e)=>setemail(e.target.value)}></input>
        <br></br>
        Password:<input type='text' onChange={(e)=>setpassword(e.target.value)}></input>
        <br></br>
        <input type='button' value='Click Here' onClick={btnclick}></input>
        
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>
            
                {
                     main.map((item) => {
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button onClick={btnDelete}>Delete</button>
                                </td>
                            </tr>
                        )

                    })

                }
               
        
        </table>
        </>
    )
}
export default Operator;

