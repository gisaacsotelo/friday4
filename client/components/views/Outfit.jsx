// Import React and useState hook from react
import React from 'react'
// IMPORT COMPONENTS
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import Form from '../modules/Form'

function Outfit() {

  return (
    <> 
      <Header />
      <h2>Get {Form.formName} some style</h2>
      <p>
        Here we get you some drip cuzzy
      </p>
      <Footer />
    </>
  )
}

export default Outfit
