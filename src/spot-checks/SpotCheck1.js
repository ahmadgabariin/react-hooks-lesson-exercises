import React, { useState } from 'react'

export default function SpotCheck1() {
  const [number , setNumber] = useState(0)
  
  function updateCounter (event) {
    event.target.innerHTML === `Increase` 
    ? setNumber(number + 1 )
    : setNumber(number - 1)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
       <span>{number}</span>
       <div>
        <button onClick={updateCounter} >Increase</button>
        <button onClick={updateCounter} >Decrease</button>
       </div>

      </div>
    </div>
  )
}