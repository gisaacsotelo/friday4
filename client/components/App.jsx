// Import useState hook from react
import React, { useState } from 'react'
// Import Route and Routes module from react
import { Route, Routes } from 'react-router-dom'

// IMPORT COMPONENTS
import Home from './views/Home'
import Outfit from './views/Outfit'

function App() {
  const [ homeName, setHomeName ] = useState('')

  // test
  const [ testName, setTestName ] = useState('')
  // test end

  const getData = (formName) => {
    console.log("Coming from Form component to Home view parent: ", formName)
    setHomeName(formName)
  }

  // test
  const sendClownName = (name) => {
    console.log(`Function has been called from Test component with: ${name}`)
    setTestName(name)
  }
  // test end

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
          {/* <Route path={`/outfit/:${homeName}`} element={<Outfit />} /> */}
          <Route path={`/outfit/:${testName}`} element={<Outfit /> } />
      </Routes>
    </div>
  )
}

export default App
