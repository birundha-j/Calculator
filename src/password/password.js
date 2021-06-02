import React, { useState } from 'react';

import eyeimg from './pwd.png';


function Password() {
    const [input, setInput] = useState([])
    // const [shown,setShown] = useState(0)
    const [btnChange,setbtnChange] = useState(true)

    function handleChange(e) {
        setInput(e.target.value)

    }
    function ShowPassword() {
        setbtnChange(!btnChange)  // !- change true or false automatically

    }
    // console.log(shown,"show");

    return (
        <div>
            
            <input type={btnChange ? "Password" :"text"} className="pwd" onChange={handleChange}></input>
            <button onClick={ShowPassword}>
                <div ><img src={eyeimg} width="10px"></img></div>
            </button>
            {/* {input} */}

        </div>
    )
}
export default Password;
