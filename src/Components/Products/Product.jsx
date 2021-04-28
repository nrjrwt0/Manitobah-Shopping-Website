import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext'
import { IsError } from '../Indicators/IsError'
import { IsLoading } from '../Indicators/IsLoading'

function Product(){
  const [product,setProduct] = useState(null)
  const [quantity,setQuantity] =  useState(1);
  const [price,setPrice] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [redirect,setRedirect] = useState(false)

  const {handleAdd} = useContext(AppContext);
  const {id} = useParams();

  const handleQuantity = (value) => {
    let val = quantity + value;
    let newPrice = product.price * val
    newPrice = Math.floor(newPrice * 100) / 100;
    newPrice = newPrice.toFixed(2)
    if(val < 1){
      setQuantity(1);
      setPrice(product.price)
    }else{
      setQuantity(val)
      setPrice(newPrice)
    }
  }

  const handleAddToCart = () => {
    const selectedProduct = {...product,quantity:quantity,price:price}
    handleAdd(selectedProduct);
    setRedirect(true);
  }

useEffect(() => {
  setIsLoading(true);
  axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/manitobah/${id}`)
  .then(res => {
    setProduct(res.data); 
    setPrice(res.data.price); 
    setIsLoading(false)})
  .catch(() => {
    setIsError(true)
    setIsLoading(false)
  })
},[])

 return( isLoading ? <IsLoading /> : isError ? <IsError /> : redirect ? <Redirect to="/cart"/> : product ? 
    <Box>
        <div>
          <img src={product.image_url} alt="img"/>
        </div>
        <div>
          <h1>{product.product_name}</h1>
          <h3>${price}</h3>
          <div>
            <button onClick={() => handleQuantity(-1)}>-</button>
            <h4>{quantity}</h4>
            <button onClick={() => handleQuantity(1)}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <p>Free shipping and returns</p>
        </div>
    </Box> : null
 )
 }
export {Product}


const Box = styled.div`
  color:#333;
  display:flex;
  justify-content:space-between;
  align-items:center;
  text-align:center;
  padding:20px 220px 60px;
  & > div:first-child{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  h1{
    font-size:42px;
    margin:8px 0px;
  }
  h3{
    margin:14px 0px 46px;
    font-size:22px;
  }
  h3+div{
    display:flex;
    justify-content:center;
    align-items:center;
    button{
      margin:10px 14px;
      padding:4px 10px;
      font-size:18px;
      color:#2D313C;
      font-weight:bold;
      background-color:white;
      cursor: pointer;
      border:none;
    }
    button:hover{
      background-color:#333;
      color:white;
      }
    h4{
      background-color:#E4E4E4;
      padding:10px 12px;
    }
  }
  div+button{
    cursor: pointer;
      margin:50px 0px 20px;
      padding:12px 200px;
      font-size:15px;
      color:#2D313C;
      font-weight:bold;
      background-color:white;
      border:3px solid red;
    }
   div+button:hover{
      background-color:#333;
      color:white;
      border:3px solid black;
      }
    p{
      font-size:16px;
    }
`