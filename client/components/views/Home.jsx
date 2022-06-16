// Import React and useState hook from react
import React, { useState } from 'react'
// IMPORT COMPONENTS
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import Form from '../modules/Form'

function Home() {
  const [ homeName, setHomeName ] = useState('')

  const getData = (formName) => {
    console.log("Coming from Form component to Home view parent: ", formName)
    setHomeName(formName)
  }


  return (
    <> 
      <Header />
      <h2>Dont be shy, build a clown</h2>
      <p>
        Here is Home{`: ${homeName}`}
      </p>
      <Form onSubmit={ getData }/>
      <Footer />
    </>
  )
}

export default Home
