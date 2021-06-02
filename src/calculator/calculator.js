import React, { useState, useEffect } from 'react';


function SimpleCalculator() {
    const [allletters, setallletters] = useState([])
    const [numbers, setnumbers] = useState([])
    const [operator, setoperator] = useState([])
    const [indexvalue, setindexvalue] = useState([])
    const [dot, setdot] = useState([])

    const [firstname, setfirstname] = useState([])
    const [secondname, setsecondname] = useState([])
    const [equal, setequal] = useState([])

    useEffect(() => {

        var firstValue = Number(numbers.slice(0, indexvalue).toString().replaceAll(",", ""))
        var secondValue = Number(numbers.slice(indexvalue, numbers.length).toString().replaceAll(",", ""))

        setfirstname(firstValue)
        setsecondname(secondValue)

        if (equal === "=") {
        var sum = eval(firstValue + operator + secondValue)

            setallletters(sum)
            setequal([])
        }
    })

    function calculate(data) {
        if (!Number.isInteger(allletters)) {//not inside the number value
            console.log(allletters,"all")
            setallletters([...allletters, data])

            
        }

        if (typeof (data) == "number" ) {
            setnumbers([...numbers, data])
        }
        else if (data === '+' || data === '-' || data === '*' || data === '/') {
            setoperator(data)
        }
        else if (data == "ac") {
            setallletters([])
            setnumbers([])
            setoperator([])
        }
        else if(data=="."){
            setdot(data )
        //     // console.log(dot,"dot")
        }
        else {
            setindexvalue(allletters.indexOf(operator))
            // console.log(indexvalue, "hsdj")

            if (data === "=") {
                
                setequal(data)
            }
        }

    }
    console.log(allletters.toString().replaceAll(",", ""),"allletters.toString().replaceAll(",", ")
    return (
        <div>
            <table>
                <tr colSpan="4">
                    <td colSpan="4"><input id="N1" value={allletters.toString().replaceAll(",", "")} /></td>

                </tr>
                <tr>
                    <td><button class="button" onClick={() => calculate(7)}>7</button></td>
                    <td><button class="button" onClick={() => calculate(8)}>8</button></td>
                    <td><button class="button" onClick={() => calculate(9)}>9</button></td>
                    <td><button class="buttoncolor" onClick={() => calculate('*')}>x</button></td>
                </tr>
                <tr>
                    <td><button class="button" onClick={() => calculate(4)}>4</button></td>
                    <td><button class="button" onClick={() => calculate(5)}>5</button></td>
                    <td><button class="button" onClick={() => calculate(6)}>6</button></td>
                    <td><button class="buttoncolor" onClick={() => calculate('-')}>-</button></td>
                </tr>
                <tr>
                    <td><button class="button" onClick={() => calculate(1)}>1</button></td>
                    <td><button class="button" onClick={() => calculate(2)}>2</button></td>
                    <td><button class="button" onClick={() => calculate(3)}>3</button></td>
                    <td><button class="buttoncolor" onClick={() => calculate('+')}>+</button></td>
                </tr>


                <tr>
                    <td><button class="button" onClick={() => calculate(0)}>0</button></td>
                    <td><button class="button" onClick={() => calculate('.')}>.</button></td>
                    <td><button class="buttoncolor" onClick={() => calculate('/')}>/</button></td>
                    <td><button class="buttoncolor" onClick={() => calculate('=')}>=</button></td>
                </tr>

                <tr>
                    <td colSpan="3"><button class="buttoncolor1" onClick={() => calculate('ac')}>clear</button></td>

                </tr>

            </table>
            {/* {firstname}<br></br> */}
            {/* {secondname}<br></br> */}
            {/* {firstname + secondname} */}
            {/* {operator} */}
            {/* {equal} */}
        </div>
    )
}
export default SimpleCalculator;

