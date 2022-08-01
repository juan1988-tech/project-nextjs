import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () =>{
  const {query:{ id }} = useRouter();
  return  <p>Esta es la página de prueba de mi producto { id }</p>
}

export default ProductItem;