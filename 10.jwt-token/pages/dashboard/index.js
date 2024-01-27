import connectToDB from '@/configs/db';
import UserModel from '@/models/User'
import { verifyToken } from "@/utils/auth";
import React from "react";

function Dashboard({user}) {
  return (
    <>
      <h1>{user.firstname} - Welcome To Dashboard</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  connectToDB()
  // console.log(context.req.cookies)
  const { token } = context.req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/signin'
      }
    }
  }

  const tokenPayload = verifyToken(token)

  if (!tokenPayload) {
    return {
      redirect: {
        detitaion: "/signin"
      }
    }
  }

  const user = await UserModel.findOne({
    email: tokenPayload.email
  },
    '-_id firstname lastname')

    console.log(user)

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
}

export default Dashboard;
