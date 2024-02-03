import { getSession } from "next-auth/react";
import React from "react";
import UserModel from "@/models/User"
import connectToDB from "@/configs/db";

function Dashboard({ user }) {
  return <h1>Welcome To Dashboard, {user.firstname} {user.lastname}</h1>;
}

// Route Protection -> Server Side
export async function getServerSideProps({req}){

  connectToDB()

  const session = await getSession({req}) //null ya jwt payload

  console.log("Session=> ", session);

  if(!session){
    return {
      redirect:{
        destination: "/signin"
      }
  }
}

const user = await UserModel.findOne(
  {email: session.user.email}, 
  "firstname lastname role"
  );

  if(user.role === 'USER'){
    return{
      redirect:{
        destination: "/dashboard"
      }
    }
  }

  return{
    props:{
      user: JSON.parse(JSON.stringify(user))
    }
  }


  return{
    props:{
      user: session.user
    }
  }


}

export default Dashboard;
