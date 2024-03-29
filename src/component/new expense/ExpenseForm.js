import React,{useState} from "react";
import './ExpenseForm.css';
import ExpenseDetails from "../expenses/expenses";

const ExpenseForm=(props )=>{
  const [enteredTitle,setEnteredTitle]=  useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });
     const titleChangeHandler=(event)=>{
     setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
        
    // })
    // setUserInput((prevState)=>{
    //      return {...prevState,enteredTitle:event.target.value}
    // })
     
     } 
     const AmountChangeHandeler=(event)=>{
        setEnteredAmount(event.target.value);
        // }
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
            
        // })
    }
        const DateChangeHandeler=(event)=>{
            setEnteredDate(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredDate:event.target.value,
            
            // });
        };
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
       Title:enteredTitle,
       Amount:enteredAmount,
       Date:new Date(enteredDate)
    };
    props.onsaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

}   

    return (
    <form onSubmit={submitHandler} >
        < div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" 
                value={enteredTitle}
                 onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" 
                value={enteredAmount}
                 onChange={AmountChangeHandeler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
               <input type="date" 
               value={enteredDate}
                min='2019-2-10'
                 max='2022-3-20
                ' onChange={DateChangeHandeler} />
            </div>
        </div>
        <div className="new-expense__actions">
        <button type='button'onClick={props.onCancel}  >cancel</button>
        <button type='submit'>Add Expense</button>
        </div>
         </form>
    );

}

export default ExpenseForm;