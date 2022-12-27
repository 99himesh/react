import logo from './logo.svg';
import './App.css';
import Card from './component/UI/card';
import ExpensesFilter from './component/new expense/expenseFilter';
import React,{useState} from 'react';
import NewExpense from './component/new expense/NewExpense';
import ExpenseList from './component/new expense/ExpensesList';
import ExpenseItem from './component/expenses/expenseitem';
import ExpenseDetails from './component/expenses/expenses';


const DUMMY_EXPENSES=[
  {id:'e1',Date:new Date(2021,2,28), Title:'car Insourence',Amount:294.76,LocationOfExpenditure:'Lucknow'},
  {id:'e2', Date:new Date(2020,5,27), Title:'Bike Insourence',Amount:129.90,LocationOfExpenditure:'Bihar'},
  {id:'e3', Date:new Date(2021,2,28), Title:'truck Insourence',Amount:300.98,LocationOfExpenditure:'Madhya pradesh'},
  { id:'e4',Date:new Date(2021,5,29), Title:'life Insourence',Amount:100.76,LocationOfExpenditure:'Jubalia'},
  {id:'e5',Date:new Date(2020,7,29), Title:'lifere Insourence',Amount:100.76,LocationOfExpenditure:'delhi'},
  {id:'e6',  Date:new Date(2020,7,29), Title:'lifere Insourence',Amount:100.76,LocationOfExpenditure:'noida'}
 ];

 

const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
   

const addExpenseHandeler=(expense)=>{

  // setExpenses([expenses,...expenses])
  setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses];
  });
};



  // console.log('In App.js');
  // console.log(expense);

// }
// const Expenses=(props)=>{
  const [filteredYear,setFilteredYear]=useState('2020');

// }
const filteredChangeHandler=selectedYear=> setFilteredYear(selectedYear);


const FIlteredExpenses=expenses.filter(expense=>(
    expense.Date.getFullYear().toString()===filteredYear
));

   return (
    <Card > 
    
     <NewExpense  onaddExpense={addExpenseHandeler} />
     < ExpensesFilter selected={filteredYear} onChange={filteredChangeHandler} />
     <ExpenseList  item={FIlteredExpenses} />
  {/* {FIlteredExpenses.length===0  &&   <p> you dont have no more item</p>} 
  {FIlteredExpenses.length>0 &&
  FIlteredExpenses.map((item)=>
  <ExpenseItem 
  key={item.id}
  title={item.Title} 
  date={item.Date}  
  amount={item.Amount} 
  LocationOfExpenditure={item.LocationOfExpenditure}> 
  </ExpenseItem>
  )}; */}

    </Card>
  );
 }
  

export default App;  


