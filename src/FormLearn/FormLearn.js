// import React from "react";
import React, { useState, useEffect } from 'react';

import "./FormLearn.css"
function FormLearn() {
  const [form,setform]= useState();

    function FieldsName() {
        // e.preventDefault();
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let call = document.getElementById("number").value;
        let result=<div><li>{name}</li><li>{age+1}</li><li>{call}</li></div>
        setform(result)

    }
    return (
        <div className="design">
            Name:<input type="text" id="name"></input><br></br>
            Age :<input type="number" id="age"></input><br></br>
            Phone Number :<input type="number" id="number"></input>
            <button onClick={FieldsName}>click</button><br></br>
            {form}
        </div>
    )
}
export default FormLearn;
