import React,{useState} from 'react';

import './Expenseitem.css';
import ExpenseDate from './ExpenceDate';
import ExpenseDetails from './expenses';
import Card from '../UI/card'
const ExpenseItem=(props)=>{

    // const DeleteExpense=()=>{
    //     console.log('delete ');
    // }

  const [ title,setTitle]=   useState(props.title);
  const [amount,setAmount]=useState(props.amount);
   const channgeprice=()=>{
      setAmount('100');
   }

    const clickedhandler=()=>{
        setTitle("updated");       
    }
    return  (
        <li>
          <Card className='expense-item' >
            <ExpenseDate  date={props.date}></ExpenseDate>
            <ExpenseDetails title = {title}  amount = {amount}/>
           <button onClick={clickedhandler}>Change title</button>
           <button onClick={channgeprice}>change Expense</button>
        </Card>
        </li>
    ); 
}
export default ExpenseItem;

