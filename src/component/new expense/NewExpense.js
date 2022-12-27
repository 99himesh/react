// import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpenses.css'
import { useState } from "react";
const NewExpense=(props)=>{
  const [IsEditing,setIsEditing ]  =useState(false)


   const saveExpenseDatatoHAndler=(EnteredExpenseData)=>{
       const expenseData={
        ...EnteredExpenseData,
          id:Math.random().toString()
       }
     props.onaddExpense(expenseData);
     setIsEditing(false);
  }


  const startEditingHandler=()=>{
   setIsEditing(true);
  }
  
  const stopEditingHandler=()=>{
   setIsEditing(false);
  }


   return (
    <div className="new-expense">
      {!IsEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
        {IsEditing && <ExpenseForm onsaveExpenseData={saveExpenseDatatoHAndler} onCancel={stopEditingHandler} /> }
    </div>
   );
}

export default NewExpense;