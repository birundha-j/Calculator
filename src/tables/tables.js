import React, { useState, useEffect } from 'react';
function Tables() {
    const [table,settable]=useState([])
    function  TableFormat(){
        let a=Number(document.getElementById("num").value);
        let b=Number(document.getElementById("num1").value);
        let Allvalue=[];
        for (let i = 1; i <= b; i++) {
            let result = i * a;
            Allvalue.push( a + "*" + i + "=" + result)

            settable(Allvalue)
        }
    }
    return (
        <div>
            Enter a number :<br></br>
            <input type="number" id="num"></input><br></br>
            Range :<br></br>
            <input type="number" id="num1"></input>
            <button type="button"onClick={TableFormat}>click</button>
            <ol>
            {table.map(table => (<li>{table}</li>))}

            </ol>

        </div>
    )
}
export default Tables;
