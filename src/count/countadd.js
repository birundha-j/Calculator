import React, { useState, useEffect } from 'react';

function AddCount() {
    // let res;
    const [count, setcount] = useState(0)
    

    function CountIncreament() {
        let a=Number(document.getElementById("number").value)
        setcount(count+1)
    }
    function CountDecreament() {
        let a=Number(document.getElementById("number").value)
        setcount(count-1)
    }
    return (
        <div>
            <input type="number" id="number" value={count} ></input><br></br>
            <button onClick={CountIncreament}>Add</button><br></br>
            <button onClick={CountDecreament}>Less</button><br></br>

            {/* {count} */}
        </div>
    )
}
export default AddCount;
