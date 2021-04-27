import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const links = [
  {
    to:"/women",
    title:"Women"
  },
  {
    to:"/men",
    title:"Men"
  },
  {
    to:"/kids",
    title:"Kids"
  },
  {
    to:"/",
    title:"Mitts & Gloves"
  },
  {
    to:"/storyboots",
    title:"Storyboots"
  },
  {
    to:"/",
    title:"Clearance"
  },
  {
    to:"/",
    title:"Help"
  }
]

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  padding:12px 20px;
  margin:auto;
  color:black;
  background-color:white;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  z-index:100;
  a{
    color:black;
    text-decoration:none;
    font-size:15px;
    font-weight:bold;
  }
  & > div {
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-grow:1;
  }
`

const Container = styled.div`
  background-color:#FFFFFF;
  position:relative;
  height:59px;
`

const Collections = styled.div`
  flex-grow:3 !important;
`
const Icons = styled.div`
  display:flex;
  justify-content:space-around !important;
`

function Navbar(){

  return(
    <Container>
      <Nav>
        <div>
         <Link to={"/"}><img width="150px" src="https://cdn.shopify.com/s/files/1/0099/9802/files/thumbnail_manitobah-logo-new.png?v=1566927683" alt="logo"/></Link> 
        </div>
        <Collections>
        {links.map(({to,title}) => {
          return (
            <div key={title}>
              <Link to={to} >{title}</Link>
            </div>
          )
        })}
        </Collections>

        <Icons>
          <div>
          <Link to="/search"><i className="fas fa-search"></i></Link>
          </div>
          <div>
          <Link to="/login"><i className="fas fa-user"></i></Link>
          </div>
          <div>
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>  
          </div>
        </Icons>
      </Nav>
    </Container>

  )
}

export {Navbar}