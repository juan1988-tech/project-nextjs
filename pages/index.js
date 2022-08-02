import React, { useEffect, useState } from 'react';

const Item = (props) =>{
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Home = () =>{
  const [productList,setProductList] = useState([]);
  
  useEffect(()=>{
    window
    .fetch('api/avo')
    .then(response=>response.json())
    .then(({data, length})=>{
      setProductList(data);
    })
  },[]);

  return(
    <div>
      <h1>Hola Platzi!</h1>
      <Item name="la india"/>
    </div>
  )
}

export default Home;