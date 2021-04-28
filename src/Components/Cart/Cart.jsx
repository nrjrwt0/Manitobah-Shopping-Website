import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext'
import { CartList } from './CartList'

const Container = styled.div`
  padding:10px 30px;
  min-height:50vh;
  margin:20px 0px 60px;
  & > div:first-child{
    margin:0px 20px;
    padding:10px;
    h2{
    font-size:24px;
    margin-bottom:30px;
    }
    & > div+div{
      display:flex;
      justify-content:flex-end;
      margin:20px 0px;
      padding:10px 0px;
      button{
        border:none;
        background-color:transparent;
        cursor: pointer;
        span{
          margin-left:8px;
        }
      }
    }
  }
  & > div:nth-child(2){
    display:flex;
    justify-content:flex-end;
    & > div{
      width:24%;
      margin-right:30px;
      text-align:center;
      div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px 24px;
      }
      h3{
        font-weight:400;
        font-size:18px;
      }
      h2{
        font-size:22px;
        span{
          font-size:16px;
        }
      }
      button{
      margin:auto;
      margin-top:32px;
      padding:18px 82px;
      font-size:15px;
      color:#2D313C;
      font-weight:bold;
      border:2px solid red;
      cursor: pointer;
      }
      button:hover{
      background-color:#333;
      color:white;
      border:2px solid black;
      }
    }
  }
  
`

const Cart = () => {

  const {cart,handleDelete} = useContext(AppContext)
  console.log(cart);
  return ( cart.length > 0 ?
    <Container>
      <div>
        <h2>Shopping Cart</h2>
        <div>{cart?.map(item => <CartList key={item.id} {...item}/>)}</div>
        <div>
          <button onClick={() => {handleDelete(-1)}}>Clear all items from cart <span>X</span> </button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h3>Subtotal</h3>
            <h2>${(cart?.reduce((ac,item) => (ac+Number(item.price)),0)).toFixed(2)} <span>USD</span></h2>
          </div>
          <div>
            <h3>Shipping</h3>
            <h3>FREE</h3>
          </div>
          <button>Check Out</button>
        </div>
      </div>
    </Container>:
    <div style={{height:"40vh"}}>
      <h1 style={{margin:"100px 0px ", textAlign:"center"}}>Oops, Cart is Empty!</h1>
    </div>
  )
}

export {Cart}