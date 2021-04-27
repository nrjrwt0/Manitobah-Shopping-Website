import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image:url("https://cdn.shopify.com/s/files/1/0099/9802/files/message-bg_2880x.jpg?v=1566933062");
  height:60vh;
  background-size: contain;
  background-repeat: no-repeat;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  font-size:15px;
  line-height:1.6;
  word-spacing:2.5px;
  padding:20px 6px;
  color:#686A73;

  & > div {
    width:54%;
  }
  & > div > div {
    width:60%;
  }
 
  h2{
    font-size:26px;
    margin-bottom:10px;
    color:#2D313C;
  }
  span{
    color:red;
  }
`

function ThankyouCont(){


  return(
    <Container>
      <div>
        <div>
          <h2>Thank you for walking with us</h2>
          <div>As an <span>Indigenous-owned</span>  company, our vision is to build a vibrant, global brand that makes a significant impact in <span>Indigenous communities.</span> </div>
        </div>
      </div>
    </Container>
  )
}

export {ThankyouCont}