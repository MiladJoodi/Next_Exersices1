import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Product/Comments'
import React from 'react'

function Product({ product, comment }) {

  console.log(comment)


  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comment} />
    </>
  )
}

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json()

  const paths = products.map(product => ({ params: { id: String(product.id) } }))

  return {
    paths,
    fallback: false,
  }

}

export async function getStaticProps(context) {
  const { params } = context;

  const productResponse = await fetch(`http://localhost:4000/menu/${params.id}`);
  const productData = await productResponse.json()

  const commentRespnse = await fetch(`http://localhost:4000/comments`);
  const comments = await commentRespnse.json()


  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );


  return {
    props: {
      product: productData,
      comment: productComments,
    },
    revalidation: 60 * 60 * 12
  };
}


export default Product