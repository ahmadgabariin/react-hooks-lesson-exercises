import React, { useState } from 'react'

export default function Exercise1() {
  // your code here
  const [state , setState] = useState({name :`` , city : `` , country : ``})

  const countries = ['united states', 'china', 'united kingdom', 'australia']

  const updateStateValues = (event) => {
    setState({...state , [event.target.name] : event.target.value})
  } 

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input placeholder='Name' type='text' value={state.name} onChange = {updateStateValues} name = {`name`}></input>
        <input placeholder='City' type='text' value={state.city} onChange = {updateStateValues} name={`city`}></input>
        <select name="country" id="cars" onChange = {updateStateValues}>
          { countries.map(coutry => <option value={coutry}>{coutry[0].toLocaleUpperCase() + coutry.slice(1)}</option>) }
        </select>
      </div>
    </div>
  )
}