import logo from './logo.svg';
import './App.css';
import ExpenseItem from './component/expenses/expenseitem';
const App=()=> {
    const expense=[
       { Date:new Date(2021,2,28), Title:'car Insourence',Amount:294.76,LocationOfExpenditure:'Lucknow'},
       { Date:new Date(2020,5,27), Title:'Bike Insourence',Amount:129.90,LocationOfExpenditure:'Bihar'},
       { Date:new Date(2021,2,28), Title:'truck Insourence',Amount:300.98,LocationOfExpenditure:'Madhya pradesh'},
       { Date:new Date(2021,5,29), Title:'life Insourence',Amount:100.76,LocationOfExpenditure:'Jubalia'},
       { Date:new Date(2020,7,29), Title:'lifere Insourence',Amount:100.76,LocationOfExpenditure:'delhi'},
       { Date:new Date(2020,7,29), Title:'lifere Insourence',Amount:100.76,LocationOfExpenditure:'noida'}
      ];
  return (
    <card>
 { expense.map((item)=>
  <ExpenseItem 
  title={item.Title} 
  date={item.Date}  
  amount={item.Amount} 
  id={item.id}
  LocationOfExpenditure={item.LocationOfExpenditure}> 
  </ExpenseItem>
  ) }
{/*   
     <ExpenseItem 
     title={expense[1].Title} 
     date={expense[1].Date}  
     amount={expense[1].Amount} 
     id={expense[1].LocationOfExpenditure}> 
     </ExpenseItem>
     <ExpenseItem 
     title={expense[2].Title} 
     date={expense[2].Date}  
     amount={expense[2].Amount} 
     id={expense[2].LocationOfExpenditure}> 
     </ExpenseItem>
     <ExpenseItem 
     title={expense[3].Title} 
     date={expense[3].Date}  
     amount={expense[3].Amount} 
     id={expense[3].LocationOfExpenditure}> 
     </ExpenseItem> */}
    </card>

  );
}

export default App;  
