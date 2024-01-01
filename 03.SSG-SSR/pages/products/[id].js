import React from "react";

function Product({ product }) {
  return <h1>Product Title: {product.title}</h1>;
}

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=7`);
  const data = await res.json();

  const paths = data.map(product=> {
    return{
      params: {id: String(product.id)}
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const productID = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

export default Product;
