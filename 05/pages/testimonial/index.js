import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Comments from '@/components/templates/Testmonial/Comments'
import React from 'react'

function Testimonial({comments}) {
  return (
    <>
    <PageHeader route="Testimonial" />
    <Comments data={comments} />
    </>
  )
}


export async function getStaticProps() {

  const res = await fetch("http://localhost:4000/comments")
  const comments = await res.json()
  
  return {
    props: {
      comments,
    },
    revalidate: 60 * 60 * 12
  }
}

export default Testimonial