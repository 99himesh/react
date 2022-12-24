import './Expenseitem.css';
import ExpenseDate from './ExpenceDate';
import ExpenseDetails from './expenses';
import card from '../UI/card'
const ExpenseItem=(props)=>{

    const DeleteExpense=()=>{
        console.log('delete ');
    }
    const clickedhandler=()=>{
        console.log('clicked!!!');
    }
    return  (
          <card className='expense-item' >
            <ExpenseDate  date={props.date}></ExpenseDate>
            <ExpenseDetails title = {props.title}  amount = {props.amount}/>
           <button onClick={clickedhandler}>Change title</button>
           <button onClick={DeleteExpense}>Delete Expense</button>
        </card>
    ); 
}
export default ExpenseItem;

