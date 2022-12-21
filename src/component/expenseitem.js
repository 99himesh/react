import './Expenseitem.css'

function ExpenseItem(){
   const expenseDate=new Date(2021,2,28);
   const expenseTitle='car Insourence';
   const expenseAmount=294.76;
   const LocationOfExpenditure='Lucknow';


    return  (
        <div className='expense-item'>

            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div>{LocationOfExpenditure}</div>
            <div className='expense-item__price'>${expenseAmount} </div>
           
            </div>
        </div>
    );
    
}
export default ExpenseItem;