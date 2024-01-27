import connectToDB from '@/configs/db';
import UserModel from '@/models/User'
import { verifyToken } from "@/utils/auth";
import React from "react";

function PAdmin({user}) {
  return <h1>Welcome To Admin Panel, {user.firstname} {user.lastname} ❤️</h1>;
}

// SSR
export async function getServerSideProps(context) {
  connectToDB()
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
    '-_id firstname lastname role')

    if(user.role !== "ADMIN"){
      return{
        redirect:{
          destination: "/dashboard"
        }
      }
    }
    return{
      props:{
        user:JSON.parse(JSON.stringify(user))
      }
    }

    console.log("user Role=> ", user.role)

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }
}

export default PAdmin;
