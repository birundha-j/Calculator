import React, { useState, useEffect } from 'react';
// import SimpleCalculator  from './calculator/calculator.js';
import './newpage.css';
// import SimpleCalculator from './calculator/calculator';
function NewPage() {
    const [name, setname] = useState()
    const [age, setage] = useState()
    const [dob, setdob] = useState()
    const [desig, setdesig] = useState()
    const [country, setcountry] = useState()
    const [mail, setmail] = useState()


    function add() {
        let name = document.getElementById("name").value
        let age = Number(document.getElementById("age").value)
        let dob = document.getElementById("dob").value
        let desig = document.getElementById("designation").value
        let country = document.getElementById("country").value
        let mail=document.getElementById("mail").value

        if (name == "" || age == "" || dob == "" || desig == "" || country == "" || mail == "") {
            alert("fill all the fields")
        }
        else {
            // alert("added successfully")
            setname(name)
            setage(age)
            setdob(dob)
            setdesig(desig)
            setcountry(country)
            setmail(mail)

        }

    }
    function remove() {
        let name = document.getElementById("name").value
        let age = Number(document.getElementById("age").value)
        let dob = document.getElementById("dob").value
        let desig = document.getElementById("designation").value
        let country = document.getElementById("country").value
        let mail=document.getElementById("mail").value

        if (name == "" || age == "" || dob == "" || desig == "" || country == "" || mail == "") {
            alert("fill all the fields")
        }
        else {
            alert("Logout successfully")

        }
        // document.getElementById("markHide").style.display = "none"
        setname()
            setage()
            setdob()
            setdesig()
            setcountry()
            setmail()

    }
    return (
        <div id="outer">
            <div id="content" >

                <table >
                    <tr>
                        <td className="Fieldsname">Name</td>
                        <td>:</td>
                        <td><input type="text" id="name" className="inputbox" autoFocus></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">Age</td>
                        <td>:</td>
                        <td><input type="number" id="age" className="inputbox"></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">DOB</td>
                        <td>:</td>
                        <td><input type="date" id="dob" className="inputbox"></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">Gender</td>
                        <td>:</td>
                        <td><input type="radio" id="male" name="gender"></input><label for="male" >Male</label>
                            <input type="radio" id="female" name="gender"></input><label for="female">Female</label></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">Designation  </td>
                        <td>:</td>
                        <td><input type="text" id="designation" className="inputbox"></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">Country  </td>
                        <td>:</td>
                        <td><input type="text" id="country" className="inputbox"></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname">E-Mail id  </td>
                        <td>:</td>
                        <td><input type="text" id="mail" className="inputbox"></input></td>
                    </tr>
                    <tr>
                        <td className="Fieldsname"><button type="submit" id="button1" onClick={add}>submit</button></td>
                        <td></td>
                        {/* <td ><button type="submit" id="button1" onClick={<a href={SimpleCalculator}></a>}>Logout</button></td> */}

                    </tr>
                </table>

            </div>
            <div id="markHide" >
            {name}<br></br>
            {age}<br></br>
            {dob}<br></br>
            {desig}<br></br>
            {country}<br></br>
            </div>
            
        </div>

    )
}
export default NewPage;
// {/* <input type="radio" id="male" name="gender" value="male">
//   <label for="male">Male</label><br></br> */}
//   function textHide() {
//     document.getElementById("markHide").style.display = "none"
// }
