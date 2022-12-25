// import React from "react";
import './expenseFilter.css'
// const ExpensesFilter = (props) => {

//     const dropdownChangeHandler = (event) => {
//         props.onChange(event.target.value);
//     };

//     return (
//         <div className='expenses-filter'>
//             <div className='expenses-filter__control'>
//               <label>filter</label>
//                 <select value={props.selected} onChange={dropdownChangeHandler}>
//                     <option value='2022'>2022</option>
//                     <option value='2021'>2021</option>
//                     <option value='2020'>2029</option>
//                     <option value='2019'>2020</option>
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default ExpensesFilter; 
import React from 'react';



const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;