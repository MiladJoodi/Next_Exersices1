import React from "react";

function Product({ product }) {
  return <h1>Product Title: {product.title}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
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
