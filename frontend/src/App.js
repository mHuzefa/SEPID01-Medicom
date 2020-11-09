import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './pages/LoginPage'
import Checkout from './components/Checkout'
import AdminLoginPage from './pages/AdminLoginPage'
import SignUp from './pages/RegistrationPage'
const App = () => {
  return (
    <Router>
      <div className='root'>
        <Header />
        <Route path='/login' component={LoginPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/signup' component={SignUp} />
        <Route path='/adminlogin' component={AdminLoginPage} />
      </div>
    </Router>
  )
}

export default App
