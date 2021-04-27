import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#F2F2F2;
  padding:20px 6px 30px;
  div{
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  p{
    font-size:11px;
    margin-right:10px;
  }

  h3{
    font-size:15px;
    margin-right:10px;
  }
`

function Copyright() {
  
  return (
      <Div>
        <div>
          <h3>1 855 685 5857</h3>
          <p>Free Shipping | </p>
          <p> Free Returns | </p>
          <p> Free Exchanges </p>
        </div>
        <div>
          <p>&#169; Copyright 2021. All rights reserved worldwide</p>
        </div>
      </Div>
  )
}

export {Copyright}