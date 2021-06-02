// import React from "react";
import React, { useState, useEffect } from 'react';


function FormDetails(){
  const [form,setform]= useState();
  const [form1,setform1]= useState();
  const [form2,setform2]= useState();


    function FormName(){
        let name = document.getElementById("name").value;
        <li>{name}</li>
        setform(name)
    }
    function FormAge(){
        let age = document.getElementById("age").value;
        <li>{age}</li>
        setform1(age)

    }
    function FormNumber(){
        let call = document.getElementById("number").value;
        <li>{call}</li>
        setform2(call)

    }
    return (
        <div>
            Name:<input type="text" id="name"></input><br></br><br></br>
            Age :<input type="number" id="age"></input><br></br><br></br>
            Phone Number :<input type="number" id="number"></input><br></br><br></br>
            <button onClick={FormName}>Name</button>
            <button onClick={FormAge}>Age</button>
            <button onClick={FormNumber}>Number</button><br></br>
            {form}<br></br>
            {form1}<br></br>
            {form2}

        </div>
    )
    
}
export default FormDetails;

