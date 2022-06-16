// Import useState hook from react
import React, { useState } from 'react'
// Import Route and Routes module from react
import { Route, Routes } from 'react-router-dom'

// IMPORT COMPONENTS
import Home from './views/Home'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        {/*
        We need a route for '/outfit/:name' that renders Outfit component
        We need a new route for 
        */}
      </Routes>
    </div>
  )
}

export default App
