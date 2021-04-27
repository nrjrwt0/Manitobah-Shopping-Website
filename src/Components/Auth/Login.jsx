import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return(
    <Container>
      <div>
        <h1>Customer Login</h1>
        <Form>
          <div>
            <label>Email Address</label>
            <input value={email} type="email" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div>
            <label>Password</label>
            <input value={password} type="password" onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
        </Form>
        <button>Sign In</button>
        <br/>
        <Link to="/login/reset">Forgot your password?</Link>
        <div>
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          <br/>
          <Link to="/">Return to Store</Link>
        </div>
      </div>
    </Container>
  )
}

export {Login}



const Container = styled.div`
    height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
    & > div{
      width:80%;
      margin:auto;
      h1{
        font-size:42px;
        margin-bottom:10px;
      }
    }
    button{
      margin:50px 0px 20px;
      padding:16px 50px;
      font-size:15px;
      color:#2D313C;
      font-weight:bold;
      background-color:white;
      border:3px solid red;
    }
    button:hover{
      background-color:#333;
      color:white;
      border:3px solid black;
    }
    a,p{
      color:#333;
      text-decoration:none;
      display:inline-block;
      margin:6px 0px;
      font-size:17px;
    }
    br+a{
      margin-bottom:20px;
    }
  `
  const Form = styled.div`
      display:flex;
      &  > div{
        flex-basis:50%;
        label{
          display:inline-block;
          margin:8px 0px;
        }
        input{
          width:90%;
          font-size:17px;
          padding:8px;
        }
        input:focus{
          outline:1px solid rgb(0,0,0,0.6);
        }
      }
  `