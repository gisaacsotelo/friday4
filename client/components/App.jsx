// Import useState hook from react
import React, { useState } from 'react'
// Import Route and Routes module from react
import { Route, Routes } from 'react-router-dom'

// IMPORT COMPONENTS
import Home from './views/Home'
import Outfit from './views/Outfit'

function App() {

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
          <Route path={`/outfit/:${Home.homeName}`} element={<Outfit />} />
      </Routes>
    </div>
  )
}

export default App
