import './ExpenseItem.css'
import React , { useState } from 'react'; // where changes should reflect we have to useState
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title , setTitle]
     = useState(props.title); // it is a react hook an important one!!! cant be called outside the function or nested functions
    // useState has a default value for now. i.e. props.title 
    // it actually returns the array first is the current value and the other is updated function
    console.log("items reevaluated")

    const clickHandler = () => {
        setTitle('Updated'); // assigns new value to the variable as it is a special variable stored in the memory 
        console.log(title);
    }
    
    return (  
        <div className="expense-item">
            <div>
            <ExpenseDate date={props.date}/>
        </div>
            <div className="expense-item__description">
              <h2>{title}</h2>
              <div className="expense-item__price">${props.amount}</div>
            </div>
            <div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
    );
}

export default ExpenseItem