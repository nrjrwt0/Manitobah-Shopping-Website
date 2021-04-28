import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { EachItem } from './EachItem'

const Div = styled.div`
  display:flex;
  flex-wrap:wrap;
  a{
    text-decoration:none;
  }
  div{
    flex-basis:20%;
  }
  
`

function Items({data}){
 return(
   <Div>
        {
          data?.map((item => {
           return(
             <div key={item.id}>
             <Link to={`/product/${item.id}`}> <EachItem  {...item} /> </Link>
             </div>
           )
          }))
        }
  </Div>
 )

}
export {Items}