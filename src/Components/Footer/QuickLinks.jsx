import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components';

const links = [
  {
    to:"/free-shipping-returns",
    title:"Free Shipping & Returns"
  },
  {
    to:"/returns-exchanges",
    title:"Returns and Exchanges"
  },
  {
    to:"/privacy-policy",
    title:"Privacy Policy"
  },
  {
    to:"/copyright",
    title:"Copyright"
  },
  {
    to:"/contactus",
    title:"Contact Us"
  },
  {
    to:"/faqs",
    title:"FAQs"
  }
];

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  padding:12px;
  margin-top:30px;
  margin-bottom:16px;
  & > div{
    /* border:1px solid red; */
    flex:1;
  };
  & > div:nth-child(3){
    /* border:1px solid #696969; */
    flex:2;
  }

  a,p{
    font-size:12px;
    text-decoration:none;
    margin-bottom:10px;
    color:#686A73;
    line-height:1.6;
  }
  h3{
    margin-bottom:14px;
    color:#2D313C;
  }
  input{
    padding:16px;
    width:70%;
    border:1px solid silver;
    text-align:center;
  }
  button{
    padding:16px;
    border:2px solid red;
    font-weight:bold;
  }
`
const JoinDiv = styled.div`
  width:40%;
`
const CommittedDiv = styled.div`
width:80%;
`

function QuickLinks() {
  return (
    <Container>
    <div>
      <h3>Quick Links</h3>
      {links.map(({to,title}) => {
        return (
          <div key={title}>
            <Link to={to}>{title}</Link>
          </div>
        )
      })}
    </div>
    <div>
      <CommittedDiv>
      <h3>We're Committed</h3>
      <p>We share our success with the communities and individuals we work with. We're keeping traditions alive while celebrating our shared values and history.</p>
      </CommittedDiv>
    </div>

    <div>
      <JoinDiv>
        <h3>Join Our Fireside</h3>
        <p>Be the first to know about our latest offerings, events, and promotions!</p>
      </JoinDiv>
      <div>
        <input type="text" placeholder="my email address"/>
        <button>Sign me up</button>
      </div>
    </div>
    </Container>
  )
}

export {QuickLinks}