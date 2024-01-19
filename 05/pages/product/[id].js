import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Testmonial/Comments'
import React from 'react'

function Product() {
  return (
    <>
      <ProductsDetails />
      <Comments />
    </>
  )
}

export async function getStaticProps(context){
  const {params} = context;

  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json()

  return {
    props:{

    }
  }
}


export default Product