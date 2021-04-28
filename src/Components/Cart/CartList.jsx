import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppContext'

const Container = styled.div`
  margin:16px 0px;
  border-top:1px solid black;
  border-bottom:1px solid black;
  & > div{
    display:flex;
    justify-content:space-between;
    align-items:center;
    & > div{
      display:flex;
      justify-content:space-between;
      align-items:center;
      div{
        margin:0px 20px
      }
    }
  }
  img{
    height:90px;
  }
  h4,h5{
    margin:6px 0px;
    font-weight:400;
  }

  button{
    margin:0px 20px;
    border:none;
    background-color:transparent;
    cursor: pointer;
  }

`

const CartList = ({id,product_name,category,quantity,price,image_url}) => {
  const {handleDelete} = useContext(AppContext)

  return (
    <Container>
      <div>
        <div>
          <div>
            <img src={image_url} alt="img"/>
          </div>
          <div>
            <h3>{product_name}</h3>
            <h4>{category}</h4>
            <h5>${(price/quantity).toFixed(2)}</h5>
         </div>
        </div>
        
        <div>
          <h3>
            ${price}
          </h3>
          <button onClick={() => {handleDelete(id)}}>Remove <span>X</span> </button>
        </div>
      </div>
    </Container>
  )
}

export {CartList}