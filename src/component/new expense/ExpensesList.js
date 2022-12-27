import React from 'react';

import ExpenseItem from '../expenses/expenseitem';
const ExpenseList=(props)=>{
 if(props.item.length===0){
   return <h2 className='expenses-list__fallback'> Only single Expense here. Please add more...
   </h2>

}    
else{
return (
   <ul className='expenses-list'>
    {props.item.map((item) =>    
    <ExpenseItem 
    key={item.id}
    title={item.Title} 
    date={item.Date}  
    amount={item.Amount} 
    LocationOfExpenditure={item.LocationOfExpenditure}> 
    </ExpenseItem>
    )}
</ul> 

)
}
}


export default ExpenseList;