// import React from "react";
import React, { useState, useEffect } from 'react';

function TenthMark(){
    const [total, settotal] = useState()
    const [field, setfield] = useState()
    const [value, setvalue] = useState()
    const [pass, setpass] = useState()
    const [fail, setfail] = useState()
    const [grade, setgrade] = useState()

    


    function Marktotal() {
        let tam=document.getElementById("tamil").value
        let eng=document.getElementById("english").value
        let math=document.getElementById("maths").value
        let sci=document.getElementById("science").value
        let ss=document.getElementById("social").value
        // if(tam <= 100 && eng <= 100 && math <= 100 && sci <= 100 && ss <= 100){
        //     settotal(Number(tam)+Number(eng)+Number(math)+Number(sci)+Number(ss))
        // }
        // else{
        //     alert("value should be not greater than 100")
        // }
        
    if (tam <= 100 && eng <= 100 && math <= 100 && sci <= 100 && ss <= 100) {
        if (tam !== "" && eng !=="" && math !=="" && sci !=="" && ss !=="") {
            let tot=Number(tam)+Number(eng)+Number(math)+Number(sci)+Number(ss)
            settotal(tot)
            console.log(tot,"fhj")
            switch(true){
                case tot <= 99:
                    // alert("test")
                    setgrade("E grade")
                    break;
                case tot <= 199:
                    setgrade("D grade") 
                    break;
                case tot <=299:
                    setgrade("C grade")
                    break;
                case tot <= 399:
                    setgrade("B grade")
                    break;
                default:
                    setgrade("A grade")
            }
            if (tam < 35 || eng < 35 || math < 35 || sci < 35 || ss < 35) {
                setfail("Fail")
            }
            else {
                setpass("pass")

            }
        }
        else {
            alert("please fill all the fields")
        }
    }
    else 
    {
        alert("value should be not greater than 100")
    }

    }
    return (
        <div>
            <table>
                <tr>
                    <td>Tamil</td>
                    <td><input type="number" id="tamil" autoFocus></input></td>
                </tr>
                <tr>
                    <td>English</td>
                    <td><input type="number" id="english"></input></td>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td><input type="number" id="maths"></input></td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td><input type="number" id="science"></input></td>
                </tr>
                <tr>
                    <td>Social</td>
                    <td><input type="number" id="social"></input></td>
                </tr>
            </table>
            
            <button onClick={Marktotal}>Total</button><br></br>
           Total : {total}<br></br>
            {field}
            {value}
            Status :{pass}{fail} <br></br>        
            Grade :{grade}
            
             
        </div>
    )
}
export default TenthMark;
