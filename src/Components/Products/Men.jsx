import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IsError } from '../Indicators/IsError';
import { IsLoading } from '../Indicators/IsLoading';
import { Items } from './Items'

function Men(){
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  
  const fetchMensData = () => {
    setIsLoading(true);
    axios.get(`https://json-server-mocker-neeraj-data.herokuapp.com/manitobah?category=men`)
    .then((res) => {setAllItems(res.data); 
      setIsLoading(false)})
    .catch(() => {
      setIsError(true)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchMensData();
  },[]);

 return( isLoading ? <IsLoading /> : isError ? <IsError /> :
   <Container>
    <ShowBox>
      <div>
        <h3>Mens's Boots and Slippers</h3>
        <p>The original winter boot of North America.</p>
      </div>
      <Items data={allItems}/>
    </ShowBox>
  </Container>
 )

}
export {Men}

const Container = styled.div`
  display:flex;
`
const ShowBox = styled.div`
  text-align:center;
  padding:10px;
  margin-bottom:120px;

  h3{
    font-size:22px;
    margin:10px 0px;
  }
  p{
    font-size:17px;
  }
`