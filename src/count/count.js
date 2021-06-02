// import React from "react"
import React, { useState, useEffect } from 'react';

const number=[1,2,3,4,5,6]

function NumberList(){
  const [list,setlist]= useState();

   function ListItems(){
    //    alert("jhsfzh")
        let List=number.map((number)=><li >{number}</li>);
        setlist(List)
    //    console.log(List,"list")
   }

    return(
        <div>
            <button onClick={()=>ListItems()}>click</button>
            
            <ol>{list}</ol>
        </div>
    )
}

export default NumberList;