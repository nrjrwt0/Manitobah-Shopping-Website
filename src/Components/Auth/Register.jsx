import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Register = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  return(
    <Container>
      <div>
        <h1>Create Account</h1>
        <Form>
          <div>
            <div>
              <label>First Name</label>
              <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
              <label>Email Address</label>
              <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
          <div>
            <div>
              <label>Last Name</label>
              <input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
              <label>Password</label>
              <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </Form>
        <button>Create</button>
        <div>
          <p>Don't have an account? <Link to="/login">Login</Link></p>
          <br/>
          <Link to="/">Return to Store</Link>
        </div>
      </div>
    </Container>
  )
}

export {Register}



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
      margin:30px 0px 20px;
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
      font-size:18px;
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
          display:inline-block;
          margin-bottom:20px;
          width:90%;
          font-size:17px;
          padding:8px;
        }
        input:focus{
          outline:1px solid rgb(0,0,0,0.6);
        }
      }
  `
