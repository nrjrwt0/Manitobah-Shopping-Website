import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color:#EAEDEE;
  height:130vh;
  display:flex;
  justify-content:space-around;
  padding:40px;

  & > div{
    height:100%;
    img{
    max-height:100%;
  }
  }
  & > div:nth-child(2){
    width:50%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h2{
      margin-bottom:40px;
      color:#2D313C;
      font-size:30px;
    }
    p{
      color:#686A73;
      font-size:17px;
      text-align:center;
      margin-bottom:20px;
      line-height:1.6;
    }
    button{
      margin-top:20px;
      padding:16px 50px;
      font-size:15px;
      color:#2D313C;
      font-weight:bold;
      border:2px solid red;
      cursor: pointer;
    }
    button:hover{
      color:white;
      background-color:#2D313C;
      border:2px solid #2D313C;
    }
  }
`

function WhatisMukluk(){


  return(
    <Container>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0099/9802/files/about-left_960x.jpg?v=1567046074" alt=""/>
        </div>
        <div>
          <h2>So, what is a mukluk?</h2>
          <p>Simply put, it's the original winter boot of Canada - known by generations as the warmest winter boot in the world.</p>
          <p>Today we continue the tradition our ancestors started thousands of years ago.</p>
          <button>Shop mukluks</button>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0099/9802/files/about-right_960x.jpg?v=1572487456" alt=""/>
        </div>
    </Container>
  )
}

export {WhatisMukluk}