import UserModel from '@/models/User'
import { verifyToken } from "@/utils/auth";
import React from "react";

function Dashboard() {
  return (
    <>
      <h1>Amin - Saeedi - Welcome To Dashboard</h1>
    </>
  );
}

export async function getServerSideProps(context) {
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

  if (!tokenPayload){
    return{
      redirect:{
        detitaion: "/signin"
      }
    }
  }

  const user = await UserModel.findOne({
    email: tokenPayload.email })



    return {
      props: {

      }
    }
}

export default Dashboard;
