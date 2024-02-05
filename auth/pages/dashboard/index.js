import { getSession } from "next-auth/react";
import React from "react";

function Dashboard({ user }) {
  return <h1>Welcome To Dashboard, {user.email}</h1>;
}

// Route Protection -> Server Side
export async function getServerSideProps({ req }) {
  const session = await getSession({ req }); // null -> Jwt Payload

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  } else {
    return {
      props: {
        user: session.user,
      },
    };
  }
}

export default Dashboard;
