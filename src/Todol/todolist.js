import React, { useState } from 'react';
import "./todolist.css";

function TodoList(){
    const [inputData,setinputData] = useState("")
    const [list,setList] = useState([])
    const [btnChange,setbtnChange] = useState(true)
    const [findIndex,setFindIndex] = useState("")

 
    function handleChange(e) {
        setinputData(e.target.value)
    }

    function handleClick() {
        setList([...list,inputData])
        setinputData("")
    }

    function handleEdit(id) {
        list.find((value,index)=>{
            if(index+1 === id){
                setinputData(value)
                setFindIndex(index)
            }
        })
        setbtnChange(false)
    }

    function handleUpdate() {
        list[findIndex] = inputData
        setbtnChange(true)
    }
    function handleDelete(id){

        var removevalue = []

        list.map((value,index)=>{
        if(index+1 !== id){
            removevalue.push(value)
        }
        })

        setList(removevalue)
    }
    

    return (
        <div className="container">
            <div className="todoContainer">
            <input id="todo" onChange={handleChange} className="todoInput" value={inputData} />
            {btnChange 
            ?
            <button onClick={handleClick} className="btnColor">Add Todo</button>
            :
            <button onClick={handleUpdate} className="btnColor">Update</button>
            }
            </div>
            {list.map((data,index)=>{
                return(
                <div className="todoList">
                    <div className="todoListMar">{data}</div>
                    <button onClick={()=>handleEdit(index+1)}>✎</button>
                    <button onClick={()=>handleDelete(index+1)}>✖</button>
                </div>)
            })}
        </div>
    )
}
export default  TodoList;