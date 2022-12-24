import './Expenseitem.css'


import ExpenseDate from './ExpenceDate';
import ExpenseDetails from './ExpenseDetails';
import card from '../UI/card'
const ExpenseItem=(props)=>{

    return  (
          <card className='expense-item'>
            <ExpenseDate  date={props.date}></ExpenseDate>
            <ExpenseDetails title = {props.title}  amount = {props.amount}/>
            {/* <div className='expense-item__description'>
            <div>{props.LocationOfExpenditure}</div>
            </div> */}
        </card>
    ); 
}
export default ExpenseItem;

