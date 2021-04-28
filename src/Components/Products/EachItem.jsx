import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  color:#333;
  overflow:hidden;
  img{
    width:170px;
    height:190px;
  }
  img:hover{
    transform:scale(1.1);
  }
  h5{
    font-size:18px;
    margin:8px 0px;
  }
  h6{
    font-size:16px;
    font-weight:400;
  }
  
`

function EachItem({product_name,image_url,price}){
 return(
   <Box>
      <img src={image_url} alt="img"/>
      <h5>{product_name}</h5>
      <h6>${price}</h6>
  </Box>
 )
 }
export {EachItem}