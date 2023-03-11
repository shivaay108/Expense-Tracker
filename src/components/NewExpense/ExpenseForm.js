import './ExpenseForm.css'
import React , {useState} from 'react';
const ExpenseForm = (props) => {
   
    

// using this type of state management rather than coding multiple slices of it 
// we must manage all the state during every state management operation
// react schedules for state updates , not instantly!!!
const [titleInput , setTitle] = useState('');  // these are multiple states we can also do it with single state option 
const [dateInput , setDate] = useState('');
const [amountInput , setAmount] = useState('');    
// single state handler handling all the states:
// const [userInput , setInput] = useState({
//     titleInput : "",
//     dateInput : "",
//     amountInput : ""
// }) I demonstrated how to handle only title using the spread operator.
// to handle the above single state handler we can do like this 
// const titleChangeHandler = (event) => {
//     setInput(() => {
//         return{...userInput , titleInput:userInput.target.value}
//     })
// }
const titleChangeHandler = (event) => {
    setTitle(event.target.value);    
    // we have to manage the other states because if we only managed the titleInput state other states will get dumped 
    
    }
   
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // here value is updated
        // console.log(event.target.value)
    }
    // i learnt that we can have multiple states
    // but we can do all the things in one state by calling an object
    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title  : titleInput,
            amount : amountInput,
            date   : new Date(dateInput)
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={titleInput}required='true'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='datetime-local' value={dateInput} min='2001-01-01' max='2023-03-09' required='true' onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  required='true' value={amountInput} onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;


// in the form values we did the two way binding be cause in the states we already 
// gave the default values to the inputs which means that whenever the page reloads 
// the values put in the states will evaluated again. and  even after the form submission
// the page will not reload and then the states will give the previous value to the form.