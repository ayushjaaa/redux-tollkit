import React, { use, useState } from 'react'
import { userdelete } from './store/reducers/Usereducer'
import { useDispatch, useSelector } from 'react-redux'
// import { userdelete } from './store/reducers/Usereducer'

const App = () => {
const {user} = useSelector(state =>state.Usereducer)
const dispatch = useDispatch()

const deletHandler = (index) =>{
  console.log(index)
dispatch(userdelete(index))


}

// console.log(user)
  return (
  <div>{  
    user.map((elem,index)=>{
      return(
        <div>
          <h1>{elem.name}</h1>
          <span onClick={()=>deletHandler(index)}>x</span>
        </div>
      )
    })}
  </div>
  )
}

export default App
