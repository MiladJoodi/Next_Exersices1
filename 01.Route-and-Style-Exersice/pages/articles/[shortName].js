import { useRouter } from 'next/router'
import React from 'react'

function SingleCourse() {

    const route = useRouter();


  return (
    <>
    <div>SingleCourse: {route.query.shortName}</div>
    
    </>
  )
}

export default SingleCourse