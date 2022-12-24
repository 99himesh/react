import React from "react";
import './ExpenseForm.css'
const ExpenseForm=()=>{
     const titleHandler=(event)=>{
     console.log(event);
     } 
    return (
    <form>
        < div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={titleHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
               <input type="date" min='2019-2-10' max='2022-3-20' onChange={titleHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
         </form>
    );

}

export default ExpenseForm;