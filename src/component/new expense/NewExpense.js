import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpenses.css'
const NewExpense=(props)=>{
   const saveExpenseDatatoHAndler=(EnteredExpenseData)=>{
       const expenseData={
        ...EnteredExpenseData,
          id:Math.random().toString()
       }
     props.onaddExpense(expenseData);
  }

   return (
    <div className="new-expense">
          <ExpenseForm onsaveExpenseData={saveExpenseDatatoHAndler} /> 
    </div>
   );
}

export default NewExpense;