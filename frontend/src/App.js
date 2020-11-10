import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Header from './components/Header'
import AdminLoginPage from './pages/AdminLoginPage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
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
        <Route path='/productpage' component={ProductPage} />
      </div>
    </Router>
  )
}

export default App
