import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-screen bg-green-50 ' >
      <nav className='w-full h-20 bg-amber-300 flex justify-between p-10'>
        <Link className='bgred\' to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
    
    </div>
  )
}

export default App
