import React from "react";
import { useRouter } from "next/router";

function Courses() {
  const route = useRouter();

  return <h1>User (ID: {route.query.userId}) Courses</h1>;
}

export default Courses;
