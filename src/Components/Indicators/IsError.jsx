import React from 'react'
import styled from 'styled-components'

const IsError = () => {
  return (
    <Div>
      <h1>Sorry, something went wrong!</h1>
    </Div>
  )
}

export {IsError}


const Div = styled.div`
  height:50vh;
  display:flex;
  justify-content:center;
  align-items:center;
`