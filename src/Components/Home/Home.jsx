import React from 'react'
import styled from 'styled-components'
import { Categories } from './Categories'
import { ThankyouCont } from './ThankyouCont'
import { WhatisMukluk } from './WhatisMukluk'

const Container = styled.div`
  background-image:url("https://cdn.shopify.com/s/files/1/0099/9802/files/Springhero_63f775ef-2b18-4b42-a4fa-a9066f288908_1440x.jpg");
  height:100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  h1{
  position: absolute;
  font-size:68px;
  top:24%;
  left:50%;
  color:white;
  transform: translate(-50%, 0%);
  text-shadow: 0px 0px 10px rgb(0 0 0 / 80%);
  }
`

function Home(){


  return(
   <>
    <Container>
      <h1>Step into Spring</h1>
    </Container>
    <ThankyouCont />
    <Categories />
    <WhatisMukluk />
    </>
  )
}

export {Home}