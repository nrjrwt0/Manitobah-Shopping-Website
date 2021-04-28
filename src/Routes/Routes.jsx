import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Login } from '../Components/Auth/Login'
import { Register } from '../Components/Auth/Register'
import { Cart } from '../Components/Cart/Cart'
import { Footer } from '../Components/Footer/Footer'
import { Home } from '../Components/Home/Home'
import {Navbar} from '../Components/Navbar/Navbar'
import { Kids } from '../Components/Products/Kids'
import { Men } from '../Components/Products/Men'
import { Product } from '../Components/Products/Product'
import { Storyboots } from '../Components/Products/Storyboots'
import { Women } from '../Components/Products/Women'

function Routes() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/women" >
          <Women />
        </Route>
        <Route path="/men" >
          <Men />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/storyboots">
          <Storyboots />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
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