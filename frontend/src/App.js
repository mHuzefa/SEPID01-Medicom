import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <Router>
      <div className='root'>
        <Header />
      </div>
    </Router>
  )
}

export default App
