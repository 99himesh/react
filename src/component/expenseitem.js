import './Expenseitem.css'

function ExpenseItem(props){



    return  (
        <div className='expense-item'>
            <div>{props.id}</div>
            <div>{new Date().toLocaleDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div>{props.LocationOfExpenditure}</div>
            <div className='expense-item__price'>${props.amount} </div>
           
            </div>
        </div>
    );
    
}
export default ExpenseItem;