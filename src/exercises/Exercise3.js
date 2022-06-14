import React, { useEffect, useState } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  // your code here
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const [month, setMonth] = useState(0)
  const [expenses, setExpenses] = useState([])
  const updateMonth = (e) => setMonth(e.target.value)
  useEffect( () => {fetchExpenses(month).then( (data)=> setExpenses(data) )} , [month]) 

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
      <select name="cars" id="cars" onChange={updateMonth}>
        {months.map( (month, index) => <option value={index} >{month}</option> )}
      </select>
      </div>
      <div className='expenses'>
        {expenses.map(expense => 
        <div className='expense' >
          <span>{expense.amount} </span>
          <span>{expense.date} </span>
          <span>{expense.item}</span>
        </div> 
        )}
      </div>
    </div>
  )
}