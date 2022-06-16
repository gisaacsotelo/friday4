// Import React and useState hook from react
import React from 'react'
// IMPORT COMPONENTS
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import Form from '../modules/Form'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <> 
      <Header />
      <h2>Dont be shy, build a clown</h2>
      <p>
        Here is Home Homs
      </p>
      <Form />
      <Footer />
    </>
  )
}

export default Home
