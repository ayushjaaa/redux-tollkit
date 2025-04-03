import React, { use, useState } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
const {user} = useSelector(state =>state.Usereducer)
const deletHandler = (id) =>{
  console.log(id)

}

// console.log(user)
  return (
  <div>{
    user.map((elem)=>{
      return(
        <div>
          <h1>{elem.name}</h1>
          <span onClick={()=>deletHandler(elem.id)}>x</span>
        </div>
      )
    })}
  </div>
  )
}

export default App
