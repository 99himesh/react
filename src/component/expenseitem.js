import './Expenseitem.css'

function ExpenseItem(){
    return  (
        <div className='expense-item'>

            <div>March 28 2021</div>
            <div className='expense-item__description'>
                <h2>Car insorence</h2>
            <div className='expense-item__price'>$294.76 </div>
            </div>
        </div>
    );
    
}
export default ExpenseItem;