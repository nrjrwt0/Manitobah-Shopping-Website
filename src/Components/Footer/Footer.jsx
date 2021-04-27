import React from 'react'
import styled from 'styled-components'
import { Copyright } from './Copyright'
import { QuickLinks } from './QuickLinks'
import { WalkWithUs } from './WalkWithUs'

const FooterDiv = styled.div`
  background-image:url("https://cdn.shopify.com/s/files/1/0099/9802/files/footer-bg_2880x.jpg?v=1567435948");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding:0px 20px;
`

function Footer() {
  return (
    <FooterDiv>
      <WalkWithUs />
      <QuickLinks />
      <hr/>
      <Copyright />
    </FooterDiv>
  )
}

export {Footer}