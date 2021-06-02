import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Count from "./count/count"
// import FormLearn from './FormLearn/FormLearn';
// import FormDetails from './FormLearn/FormButtons';
// import AddCount from './count/countadd';
// import TenthMark from './Marks/Mark';
import SimpleCalculator from './calculator/calculator.js';
import AddStrings from './addstring/addstring';
import NewPage from './newpage/newpage';
// import ImagePage from './baby1.png';
// import Example from './FormLearn/example';
import Tables from './tables/tables';
import TodoList from './Todol/todolist';
import Password from './password/password';
import Todolist from './NewTodo/NewTodo';
import CheckString from './chechnum/chechstring';


ReactDOM.render(
  <React.StrictMode>
    <SimpleCalculator/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
