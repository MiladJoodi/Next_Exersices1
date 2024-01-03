import React from 'react'

function Posts({posts}) {
  return (
    <div>
        <ul>
            {
                posts.map(post=> (
                    <li key={post.div}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export async function getServerSideProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    console.log("ssr")
    console.log("Directory=>", __dirname)

    return{
        props: {
            posts: data.slice(0,8)
        }
    }
}

export default Posts