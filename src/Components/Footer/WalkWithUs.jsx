import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  text-align:center;
  div{
    width:50%;
    margin:30px auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  h2{
    padding:40px 40px 6px;
    color:#2D313C;
  }
  a{
    color:#2D313C;;
    text-decoration:none;

  }
`

function WalkWithUs() {
  return (
      <Div>
        <h2>Walk With Us</h2>
        <div>
          <Link to="#"><i className="fab fa-facebook-square"></i></Link>
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-pinterest"></i></Link>
          <Link to="#"><i className="fab fa-twitter"></i></Link>
        </div>
      </Div>
  )
}

export {WalkWithUs}