import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
  
function Categories(){

const Container = styled.div`
  &  > div {
    display:flex;
    justify-content:space-between;
  }
  &  > div > a{
   flex:1;
   text-decoration:none;
   overflow:hidden;
  }
  &  > div > a > div{
    flex:1;
    height:400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    transition: transform 0.5s ease-in;
  }
  &  > div > a > div:hover {
    transform:scale(1.05);
  }

  h2{
    font-size:28px;
    margin-bottom:8px;
  }
  p{
    font-size:18px;
  }
`
const Box1 = styled.div`
  background-image:url('https://cdn.shopify.com/s/files/1/0099/9802/files/mukluks-collection_720x_60f3c266-3ca5-4f79-baf5-cc0e20e80b3f_1440x.jpg?v=1567045397');
`
const Box2 = styled.div`
  background-image:url('https://cdn.shopify.com/s/files/1/0099/9802/files/collection-bg-4_720x_d92de852-5930-45cf-bf22-2373091a3153_1440x.jpg?v=1567045673');
`
const Box3 = styled.div`
  background-image:url('https://cdn.shopify.com/s/files/1/0099/9802/files/kids-collection_1440x.jpg?v=1567045690');
`
const Box4 = styled.div`
  background-image:url('https://cdn.shopify.com/s/files/1/0099/9802/files/collection-bg-2_1440x.jpg?v=1567045778');
`

  return(
    <Container>
      <div>
        <Link to="/women">
          <Box1>
            <h2>Women</h2>
            <p>Warm and Comfortable</p>
          </Box1>
        </Link>
        <Link to="/men">
          <Box2>
            <h2>Men</h2>
            <p>Lightweight and Natural</p>
          </Box2>
        </Link>
      </div>
      <div>
        <Link to="/kids">
          <Box3>
            <h2>Kids</h2>
            <p>Waterproof and play-proof</p>
          </Box3>
        </Link>
        <Link to="/storyboots">
          <Box4>
            <h2>Storyboots</h2>
            <p>Traditional and Inspiring</p>
          </Box4>
        </Link>
      </div>
    </Container>
  )
}

export {Categories}