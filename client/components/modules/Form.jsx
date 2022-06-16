// Import React ans useState from react
import React, { useState } from 'react'

function Form({ onSubmit }) {
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
    onSubmit(formName)

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

export default Form

  // <form>
    //   <label>
    //     Name:
    //   </label>
    //     <select id="meat" name="meat">
    //     {{#each data.meats}}
    //     <option value="{{meat_id}}">{{meat_name}}</option>  
    //     {{/each}}
    //     </select>
    //     <br>
    //     <label for="veg">Add some veggies:</label>
    //     <select id="veg" name="veg">
    //     {{#each data.veggies}}
    //     <option value="{{veg_id}}">{{veg_name}}</option>
    //     {{/each}}
    //     </select>
    //     <br>
    //     <label for="sauce">Which sauce:</label>
    //     <select id="sauce" name="sauce">
    //     {{#each data.sauces}}
    //     <option value="{{sauce_id}}">{{sauce_name}}</option>
    //     {{/each}}
    //     </select>
    //     <div></div>
    //     <button>Make my taco</button>
    // </form>