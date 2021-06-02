import React, { useState } from 'react';
function CheckString(){
    const [input, setInput] = useState([])

    function  Checkword() {
        let str=document.getElementById("string").value
        let A=str.toLowerCase(str).charAt(0)
        if(A=="r") {
        setInput([...input,str])

        }   
        else{
            alert("enter a R letter string")
        } 
    }
    return (
        <div>
            <input type="text" id="string"></input>
            <button onClick={Checkword}>Add</button> 
            {input.map((data)=>{
                return(
            <div className="list">{data}</div>

                )
                
            }
                )}

        </div>
    )
}
export default CheckString;