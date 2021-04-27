import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Login } from '../Components/Auth/Login'
import { Register } from '../Components/Auth/Register'
import { Footer } from '../Components/Footer/Footer'
import { Home } from '../Components/Home/Home'
import {Navbar} from '../Components/Navbar/Navbar'

function Routes() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route>
          <div style={{height:"40vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
             <h3>Sorry, Page not found</h3>
             <Link to="/" style={{textDecoration:"none",color:"#333", margin:"20px 0px"}}>Go back to home page</Link>
          </div>
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export {Routes}