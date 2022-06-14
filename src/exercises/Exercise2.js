import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Exercise2() {
  // your code here
  const [users, setUsers] = useState([])

 useEffect( async () => {
  let users = (await axios.get(`https://randomuser.me/api/?results=5`)).data.results
  setUsers(users)
 } , [])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(user => <div>
          <span>{user.name.first} </span>
          <span>{user.name.last}</span>
          <div><img src={user.picture.medium}></img></div>
        </div>)}
      </div>
    </div>
  )
}