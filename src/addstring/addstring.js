// import React from "react"
import React, { useState, useEffect } from 'react';
import Editicon from './edit.png';
import './addstring.css';


function AddStrings() {
    const [string, setstring] = useState([])
    const [edit, setedit] = useState([])

    useEffect(() => {
        console.log(console.log(string, "string"))
        // setstring(string)
    })

    function increament() {
        let str = document.getElementById("str").value;
        
        setstring([...string, str])
        


    }
    function decreament() {


        var remove = []

        string.map((data, index) => {
            if (index + 1 !== string.length) { // index+1 => index value+1 & string.length => Last index{only check string.length-1}
                remove.push(data)  // {dont save last value}
            }
        })

        console.log(remove, "remove")
        setstring(remove)

        console.log(string, "string.pop()2")
    }
    function editstring() {
        setstring([string])
        
    }

    return (
        <div>
            <input type="text" id="str" placeholder="add a string"  name="text"></input>
            <button onClick={increament}>Add</button><br></br>
            <button onClick={decreament}>remove</button><br></br>

            <button  class="b1" onClick={editstring}>Edit</button><br></br>
            <img src={Editicon} class="edits"></img>
            {string.map(string => (
            <li >{string}</li>))}
            
        </div>
    )
}
export default AddStrings;
// .join("<br>")
// numbers.map((number) => number * 2)
// const listItems = string.map((string) => <li>{string}</li>)
