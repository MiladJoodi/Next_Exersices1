import { useRouter } from 'next/router'
import React from 'react'

function SingleArticle() {

    const route = useRouter();
    const slug = route.query.slug || [];

    console.log(slug);

    if(slug.length > 2){
        return <h1>You see {slug[0]} article {slug[1]}/ {slug[2]} / {slug[3]} {slug[4]}</h1>
    }

  return (
    <h1>Single Article</h1>
  )
}

export default SingleArticle