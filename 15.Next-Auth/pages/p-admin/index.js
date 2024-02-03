import { getSession } from "next-auth/react";
import React from "react";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

function Dashboard({ user }) {
  return (
    <h1>
      Welcome To Admin Panel, {user.firstname} - {user.lastname}
    </h1>
  );
}

// Route Protection -> Server Side -> RBAC - ABAC
export async function getServerSideProps({ req }) {
  const session = await getSession({ req }); // null -> Jwt Payload
  connectToDB();

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  const user = await UserModel.findOne(
    { email: session.user.email },
    "firstname lastname role"
  );

  if (user.role === "USER") {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default Dashboard;
