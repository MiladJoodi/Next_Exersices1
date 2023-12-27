import React from 'react'
import { useRouter } from 'next/router';


function ArtcileDetails() {

  const route = useRouter();

  console.log(route.query.shortName)

  return (
    <h1>Article Details</h1>
  )
}

export default ArtcileDetails