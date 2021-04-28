import React from 'react'
import styled from 'styled-components'

const IsLoading = () => {
  return (
    <Div>
      <h1>Loading...</h1>
    </Div>
  )
}

export {IsLoading}

const Div = styled.div`
  height:50vh;
  display:flex;
  justify-content:center;
  align-items:center;
`