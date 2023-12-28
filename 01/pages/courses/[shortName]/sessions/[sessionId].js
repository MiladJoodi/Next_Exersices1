import { useRouter } from "next/router";
import React from 'react'

function Session() {

  const route = useRouter()
  console.log(route.query.shortName);

  return (
    <div>SessionID (ID:) </div>
  )
}

export default Session