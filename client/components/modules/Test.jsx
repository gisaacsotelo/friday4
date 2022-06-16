// Import React ans useState from react
import React, { useState } from 'react'

function Test( props ) {
  // trying out CONTROLLED COMPONENTS
  const [ formName, setFormName ] = useState('')

  // handles change of name
  const handleChange = (e) => {
    setFormName(e.target.value)
  }
  // handles submitting
  const handleSubmit = (e) => {
    e.preventDefault() // prevent default re render of the page
    // todo: I want to rerote on submit to: '/outfit/{name}'
    // console.log(`A name was submitted homs: ${name}`)
    props.theName(formName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={formName} onChange={handleChange} placeholder="Write a Name"/>
      </label>
      <input type="submit"/>
    </form>
  )
  
    
}

export default Test



// import React, { useState }from "react";
// import App from '../App';

// import { Link } from 'react-router-dom'

// function Test () {
//   const [ formName, setFormName ] = useState('')

//   const handleNameChange = (e) => {
//     setFormName(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(`Form has been submitted with value: `, formName)
//     App.sendClownName()
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//       <input 
//         type='text' 
//         value={formName} 
//         onChange={handleNameChange} 
//         placeholder="Write a Name" 
//       />
//       </label>
//       <Link to={`/outfit/${formName}`} >
//         <input type="submit" />
//       </Link>
//     </form>
//   )
// }

// export default Test
