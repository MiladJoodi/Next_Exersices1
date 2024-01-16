import React from "react";
import Link from "next/link";

function Posts({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

// SSG => Static Site Generation -> Build Time (Performance) -> ISR -> ✅
// SSR => Server Side Rendering -> Run Time -> Req -> ❌

// - Ali Mmd Ramin ...

export async function getServerSideProps(context) {
  const { params, req: request, res: response, query } = context;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // Node.js Code

  console.log(`SSR -> getServerSideProps`); // Server - Api key - cookie - token
  console.log("Query Params =>", query);

  return {
    props: {
      posts: data.slice(0, 8),
    },
  };
}

export default Posts;
