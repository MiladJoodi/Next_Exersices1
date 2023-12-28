import React from "react";
import { useRouter } from "next/router";

function ArticleDetails() {
  const route = useRouter();

  console.log(route.query.shortName);

  return <h1>Article Details ({route.query.shortName})</h1>;
}

export default ArticleDetails;
