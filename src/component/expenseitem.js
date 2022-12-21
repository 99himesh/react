import './Expenseitem.css'


import ExpenseDate from './ExpenceDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){

    return  (
        <div className='expense-item'>
           <ExpenseDate  date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title}  amount={props.amount} ></ExpenseDetails>
            {/* <div className='expense-item__description'>
            <div>{props.LocationOfExpenditure}</div>
            </div> */}
        </div>
    ); 
}
export default ExpenseItem;


