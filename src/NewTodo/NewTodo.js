import React, { useState } from 'react';
import './NewTodo.css';

function Todolist() {
    const [input, setInput] = useState()
    const [add, setadd] = useState([])
    const [edit, setEdit] = useState([])
    const [btnChange, setbtnChange] = useState(true)

    function InputChange(e) {
        setInput(e.target.value)
    }
    function AddList() {
        
            setadd([...add, input])
        setInput("")
            
            



    }
    function EditButton(a) {
        add.find((value, index) => {//which value choose by using in index value
            if (index + 1 == a) {
                setInput(value)
                setEdit(index)
            }
        })
        setbtnChange(false)
    }
    function UpadateList() {
        add[edit] = input //choose that index number save in "edit" variable
        setbtnChange(true)    // add that change the field

    }
    function DeleteButton(data) {
        let p = []
        add.map((value, index) => {
            if (index + 1 !== data) {
                p.push(value)
                console.log(index + 1 !== data,"index + 1 !== data")
            }
        })
        setadd(p)

    }
    return (
        <div className="container">
            <div >
                <input type="text" onChange={InputChange} value={input} className="inputbox"></input>

                {btnChange ?
                    <button className="Todobutton" onClick={AddList}>Add</button>
                    :
                    <button className="Todobutton" onClick={UpadateList}>Update</button>

                }
            </div>
            {add.map((data, index) => {
                return (
                    <div className="todolist">
                        <div className="todospace">{data}</div>
                        <button className="btncolor" onClick={() => EditButton(index + 1)}>✎</button>
                        <button className="btncolor" onClick={() => DeleteButton(index + 1)}>✖</button>

                    </div>
                )

            })}
        </div>
    )
}
export default Todolist;