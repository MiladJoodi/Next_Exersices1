import Link from "next/link";
import React from "react";

function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <h2 key={product.id}>
          <Link href={`/products/${product.id}`} prefetch={true}>
            {product.id}. {product.title}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=7");
  const data = await res.json();

  console.log("Directory =>", __dirname);

  return {
    props: {
      products: data,
    },
  };
}

// 1. Only run server
// 2. Security
// 3. Run Node.js Code
// 4. only on pages folder
// 5. return object (props property)
// 6. ?

export default Products;
