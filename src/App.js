import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NameChange from "./propsText";


function App() {

  const [name,setname]= useState("Ranjith");

  function nameChange(){
    setname("Ranjith Don")
  }
  
  return (
    <div>
      <NameChange name={name} /><br></br>
      <button onClick={()=> nameChange()}>click me</button>
    </div>
  );
}

export default App;