import React from 'react'
import ReactDOM from 'react-dom'
// Import Router module from react
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
// Add router tag around whole app
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>, 
    document.getElementById('app')
  )
})
