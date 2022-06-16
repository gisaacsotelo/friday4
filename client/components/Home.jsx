// Import React and useState hook from react
import React, { useState } from 'react'
// IMPORT COMPONENTS
import Header from './Header'
import Footer from './Footer'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <> 
      <Header />
      <h2>Dont be shy, build a clown</h2>
      <p>
        Here is Home Homs
      </p>
      <Footer />
    </>
  )
}

export default Home
